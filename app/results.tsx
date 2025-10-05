import { router, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { RotateCcw, Trophy } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResultsScreen() {
  const { score, total, mode = "beginner" } = useLocalSearchParams<{
    score: string;
    total: string;
    mode?: string;
  }>();

  const finalScore = parseInt(score || "0", 10);
  const totalQuestions = parseInt(total || "15", 10);
  const percentage = Math.round((finalScore / totalQuestions) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "EXCELLENT!";
    if (percentage >= 80) return "GREAT JOB!";
    if (percentage >= 70) return "GOOD WORK!";
    if (percentage >= 60) return "NOT BAD!";
    return "KEEP PRACTICING!";
  };

  const performanceTextStyle = {
    ...styles.performanceText,
    color: percentage >= 80 ? "#9DC183" : percentage >= 60 ? "#DAA520" : "#CD853F",
  };

  const handlePlayAgain = () => {
    router.push({
      pathname: "/quiz",
      params: { mode }
    });
  };

  const handleBackToModeSelection = () => {
    router.push("/mode-selection");
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Trophy size={60} color="#F5F5DC" strokeWidth={2} />
          </View>
          
          <Text style={performanceTextStyle}>
            {getPerformanceMessage()}
          </Text>
        </View>

        <View style={styles.scoreSection}>
          <Text style={styles.scoreLabel}>FINAL SCORE</Text>
          <Text style={styles.scoreValue}>
            {finalScore}/{totalQuestions}
          </Text>
          <Text style={styles.percentageText}>{percentage}%</Text>
          

        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.playAgainButton} onPress={handlePlayAgain}>
            <RotateCcw size={24} color="#F5F5DC" strokeWidth={2} />
            <Text style={styles.playAgainText}>PLAY AGAIN</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.homeButton} onPress={handleBackToModeSelection}>
            <Text style={styles.homeButtonText}>CHOOSE MODE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC", // cream
  },
  content: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  iconContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#DAA520", // mustard yellow
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  performanceText: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 3,
    textAlign: "center",
  },
  scoreSection: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "#9DC183",
    letterSpacing: 2,
    marginBottom: 16,
  },
  scoreValue: {
    fontSize: 72,
    fontWeight: "700",
    color: "#9DC183",
    marginBottom: 8,
  },
  percentageText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#008B8B", // teal
    marginBottom: 40,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 60,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#9DC183",
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#9DC183",
    letterSpacing: 1,
  },
  buttonContainer: {
    gap: 16,
  },
  playAgainButton: {
    backgroundColor: "#008B8B", // teal
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  playAgainText: {
    color: "#F5F5DC",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
  },
  homeButton: {
    backgroundColor: "#9DC183", // avocado green
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  homeButtonText: {
    color: "#F5F5DC",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 2,
  },
});