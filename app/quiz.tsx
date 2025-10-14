import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft, MapPin } from "lucide-react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Animated, Keyboard, KeyboardAvoidingView, Linking, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { generateQuizQuestions, type QuizQuestion } from "@/data/quiz-data";

type QuizMode = "beginner" | "intermediate" | "advanced";

export default function QuizScreen() {
  const { mode = "beginner" } = useLocalSearchParams<{ mode?: QuizMode }>();
  const [questions, setQuestions] = useState<QuizQuestion[]>(() => generateQuizQuestions(10));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [showCorrectAnswerText, setShowCorrectAnswerText] = useState<boolean>(false);
  const [showMapButton, setShowMapButton] = useState<boolean>(false);
  const [feedbackColor] = useState(new Animated.Value(0));
  const [typedAnswer, setTypedAnswer] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [timerActive, setTimerActive] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const inputRef = useRef<TextInput>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isAdvancedMode = mode === "advanced";
  const isBeginnerMode = mode === "beginner";

  const animateFeedback = useCallback(async (isCorrect: boolean, currentScore?: number, currentWrong?: number) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    setTimerActive(false);
    setShowFeedback(true);
    if (!isCorrect) {
      setShowCorrectAnswerText(true);
    }
    
    // Show map button for beginner mode after feedback
    if (isBeginnerMode) {
      setShowMapButton(true);
    }
    
    // Use provided values or calculate from current state
    const finalScore = currentScore !== undefined ? currentScore : (isCorrect ? score + 1 : score);
    const finalWrong = currentWrong !== undefined ? currentWrong : (isCorrect ? wrongAnswers : wrongAnswers + 1);
    
    Animated.sequence([
      Animated.timing(feedbackColor, {
        toValue: isCorrect ? 1 : -1,
        duration: 300,
        useNativeDriver: false,
      }),
      Animated.timing(feedbackColor, {
        toValue: isCorrect ? 1 : -1, // Keep the color visible longer
        duration: isCorrect ? 2700 : 3700, // 3 seconds total for correct, 4 seconds for wrong
        useNativeDriver: false,
      }),
      Animated.timing(feedbackColor, {
        toValue: 0,
        duration: 300, // Quick fade out
        useNativeDriver: false,
      }),
    ]).start(() => {
      setShowFeedback(false);
      setShowCorrectAnswerText(false);
      setShowMapButton(false);
      setSelectedAnswer(null);
      setTypedAnswer("");
      
      if (isLastQuestion) {
        // Dismiss keyboard and blur input before navigation
        Keyboard.dismiss();
        inputRef.current?.blur();
        
        // Small delay to ensure keyboard is dismissed
        setTimeout(() => {
          router.push({
            pathname: "/results",
            params: { 
              score: finalScore.toString(),
              total: questions.length.toString(),
              wrong: finalWrong.toString(),
              mode
            }
          });
        }, 100);
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    });
  }, [feedbackColor, isLastQuestion, score, wrongAnswers, questions.length, mode, isBeginnerMode]);

  useEffect(() => {
    if (isAdvancedMode && !showFeedback) {
      setTimeLeft(10);
      setTimerActive(true);
      
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            setTimerActive(false);
            
            setWrongAnswers(prevWrong => {
              const newWrong = prevWrong + 1;
              setScore(prevScore => {
                animateFeedback(false, prevScore, newWrong);
                return prevScore;
              });
              return newWrong;
            });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [currentQuestionIndex, showFeedback, isAdvancedMode, animateFeedback]);

  useEffect(() => {
    if (!isBeginnerMode && !showFeedback) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [currentQuestionIndex, showFeedback, isBeginnerMode]);

  useEffect(() => {
    setQuestions(generateQuizQuestions(10));
    setCurrentQuestionIndex(0);
    setScore(0);
    setWrongAnswers(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setShowCorrectAnswerText(false);
    setShowMapButton(false);
    setTypedAnswer("");
    setTimeLeft(10);
    setTimerActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [mode]);

  const handleAnswerPress = useCallback((selectedRun: string) => {
    if (!selectedRun?.trim() || selectedAnswer || showFeedback) return;
    
    setSelectedAnswer(selectedRun);
    const isCorrect = selectedRun === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }
    
    setTimeout(() => {
      animateFeedback(isCorrect);
    }, 200);
  }, [selectedAnswer, showFeedback, currentQuestion.correctAnswer, animateFeedback]);

  const handleTypedSubmit = useCallback(() => {
    if (!typedAnswer.trim() || showFeedback) return;
    
    const normalizedTyped = typedAnswer.trim().toLowerCase();
    const normalizedCorrect = currentQuestion.correctAnswer.toLowerCase();
    
    // Check if the typed answer matches (with or without "run" prefix)
    const isCorrect = normalizedTyped === normalizedCorrect || 
                     normalizedTyped === normalizedCorrect.replace("run ", "") ||
                     `run ${normalizedTyped}` === normalizedCorrect;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }
    
    setTimeout(() => {
      animateFeedback(isCorrect);
    }, 200);
  }, [typedAnswer, showFeedback, currentQuestion.correctAnswer, animateFeedback]);

  const handleBackToModeSelection = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    router.push("/mode-selection");
  }, []);

  const generateMapUrl = useCallback((address: string): string => {
    // Format the address for Google Maps
    const formattedAddress = `${address}, Palmerston North, New Zealand`;
    const encodedAddress = encodeURIComponent(formattedAddress);
    return `https://maps.google.com/maps?q=${encodedAddress}`;
  }, []);

  const handleShowOnMap = useCallback(() => {
    const mapUrl = generateMapUrl(currentQuestion.address);
    
    if (Platform.OS === 'web') {
      // Open in new tab for web
      window.open(mapUrl, '_blank');
    } else {
      // Use Linking for mobile
      Linking.openURL(mapUrl).catch(err => {
        console.error('Failed to open map:', err);
      });
    }
  }, [currentQuestion.address, generateMapUrl]);

  const animatedBackgroundStyle = {
    backgroundColor: feedbackColor.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: ["#ff6666", "#F5F5DC", "#9DC183"],
    }),
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <StatusBar style="dark" />
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.flex}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
        >
          <ScrollView 
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackToModeSelection}>
            <ArrowLeft size={24} color="#9DC183" strokeWidth={2} />
          </TouchableOpacity>
          
          <Text style={styles.questionCounter}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
          
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>✓ {score}</Text>
            <Text style={styles.scoreText}>✗ {wrongAnswers}</Text>
          </View>
        </View>

        {isAdvancedMode && (
          <View style={styles.timerContainer}>
            <Text style={styles.timerText}>{timeLeft}s</Text>
          </View>
        )}

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{currentQuestion.address}</Text>
        </View>

        {isBeginnerMode ? (
          <View style={styles.answersContainer}>
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === currentQuestion.correctAnswer;
              const showCorrectAnswer = selectedAnswer && isCorrect;
              const showWrongAnswer = selectedAnswer && isSelected && !isCorrect;

              return (
                <TouchableOpacity
                  key={`${currentQuestion.address}-${option}`}
                  style={[
                    styles.answerButton,
                    styles[`answerButton${currentQuestion.options.indexOf(option) + 1}` as keyof typeof styles],
                    showCorrectAnswer && styles.correctAnswer,
                    showWrongAnswer && styles.wrongAnswer,
                  ]}
                  onPress={() => {
                    if (!option?.trim()) return;
                    handleAnswerPress(option);
                  }}
                  disabled={selectedAnswer !== null}
                >
                  <Text style={styles.answerText}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}
          >
            <View style={styles.inputContainer}>
              <TextInput
                ref={inputRef}
                style={styles.numericInput}
                value={typedAnswer}
                onChangeText={(text) => {
                  const numericOnly = text.replace(/[^0-9]/g, '');
                  if (numericOnly.length <= 3) {
                    setTypedAnswer(numericOnly);
                  }
                }}
                placeholder="Enter run number"
                placeholderTextColor="#999"
                keyboardType="number-pad"
                maxLength={3}
                editable={!showFeedback}
                onSubmitEditing={handleTypedSubmit}
                returnKeyType="done"
                autoFocus={!showFeedback}
              />
              <TouchableOpacity 
                style={[
                  styles.submitButton,
                  (!typedAnswer.trim() || showFeedback) && styles.submitButtonDisabled
                ]} 
                onPress={handleTypedSubmit}
                disabled={!typedAnswer.trim() || showFeedback}
              >
                <Text style={styles.submitButtonText}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        )}

        {showCorrectAnswerText && (
          <View style={styles.correctAnswerContainer}>
            <Text style={styles.correctAnswerLabel}>Correct Answer:</Text>
            <Text style={styles.correctAnswerValue}>{currentQuestion.correctAnswer}</Text>
          </View>
        )}

        {showMapButton && isBeginnerMode && (
          <View style={styles.mapButtonContainer}>
            <TouchableOpacity style={styles.mapButton} onPress={handleShowOnMap}>
              <MapPin size={20} color="#F5F5DC" strokeWidth={2} />
              <Text style={styles.mapButtonText}>SHOW ON MAP</Text>
            </TouchableOpacity>
          </View>
        )}
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  timerContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#9DC183",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  inputContainer: {
    paddingBottom: 40,
    gap: 20,
  },
  numericInput: {
    backgroundColor: "#FFFFFF",
    borderWidth: 3,
    borderColor: "#000000",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 24,
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
    textAlign: "center",
    maxLength: 3,
  },
  submitButton: {
    backgroundColor: "#008B8B",
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#F5F5DC",
    letterSpacing: 2,
  },
  questionCounter: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9DC183",
  },
  scoreContainer: {
    flexDirection: "row",
    gap: 20,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9DC183",
  },
  questionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 32,
    fontWeight: "700",
    color: "#9DC183",
    textAlign: "center",
    lineHeight: 40,
  },
  answersContainer: {
    paddingBottom: 40,
    gap: 16,
  },
  answerButton: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    borderRadius: 8,
    minHeight: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  answerButton1: {
    backgroundColor: "#DAA520", // mustard yellow
  },
  answerButton2: {
    backgroundColor: "#9DC183", // avocado green
  },
  answerButton3: {
    backgroundColor: "#008B8B", // teal
  },
  answerButton4: {
    backgroundColor: "#CD853F", // burnt orange
  },
  answerText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#F5F5DC",
    textAlign: "center",
    letterSpacing: 1,
  },
  correctAnswer: {
    backgroundColor: "#A1996E",
  },
  wrongAnswer: {
    backgroundColor: "#ff6666",
  },
  animatedBackground: {
    flex: 1,
  },
  correctAnswerContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#000000",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  correctAnswerLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
    letterSpacing: 1,
  },
  correctAnswerValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000000",
    letterSpacing: 1,
  },
  mapButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  mapButton: {
    backgroundColor: "#9DC183", // avocado green
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    minWidth: 200,
  },
  mapButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#F5F5DC",
    letterSpacing: 1,
  },

});