import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft, Clock, Edit3, Target } from "lucide-react-native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ModeSelectionScreen() {
  const handleModeSelect = (mode: "beginner" | "intermediate" | "advanced") => {
    router.push({
      pathname: "/quiz",
      params: { mode }
    });
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <ArrowLeft size={24} color="#9DC183" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>SELECT YOUR</Text>
          <Text style={styles.subtitle}>CHALLENGE</Text>
        </View>

        <View style={styles.modesContainer}>
          <TouchableOpacity 
            style={[styles.modeButton, styles.beginnerButton]} 
            onPress={() => handleModeSelect("beginner")}
          >
            <View style={styles.modeIconContainer}>
              <Target size={32} color="#F5F5DC" strokeWidth={2} />
            </View>
            <Text style={styles.modeTitle}>BEGINNER</Text>
            <Text style={styles.modeSubtitle}>Multiple Choice</Text>
            <Text style={styles.modeDescription}>
              Choose from 4 options{"\n"}Perfect for learning
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.modeButton, styles.intermediateButton]} 
            onPress={() => handleModeSelect("intermediate")}
          >
            <View style={styles.modeIconContainer}>
              <Edit3 size={32} color="#F5F5DC" strokeWidth={2} />
            </View>
            <Text style={styles.modeTitle}>INTERMEDIATE</Text>
            <Text style={styles.modeSubtitle}>Type the Run</Text>
            <Text style={styles.modeDescription}>
              Type the run number{"\n"}Test your memory
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.modeButton, styles.advancedButton]} 
            onPress={() => handleModeSelect("advanced")}
          >
            <View style={styles.modeIconContainer}>
              <Clock size={32} color="#F5F5DC" strokeWidth={2} />
            </View>
            <Text style={styles.modeTitle}>ADVANCED</Text>
            <Text style={styles.modeSubtitle}>Speed Round</Text>
            <Text style={styles.modeDescription}>
              Beat the timer{"\n"}Quick decisions
            </Text>
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
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 15,
    marginTop: 0,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#9DC183", // avocado green
    letterSpacing: 2,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#CD853F", // burnt orange
    letterSpacing: 2,
    textAlign: "center",
  },
  modesContainer: {
    justifyContent: "flex-start",
    paddingVertical: 0,
  },
  modeButton: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
    minHeight: 110,
    justifyContent: "center",
    marginVertical: 6,
  },
  beginnerButton: {
    backgroundColor: "#DAA520", // mustard yellow
  },
  intermediateButton: {
    backgroundColor: "#008B8B", // teal
  },
  advancedButton: {
    backgroundColor: "#CD853F", // burnt orange
  },
  modeIconContainer: {
    marginBottom: 12,
  },
  modeTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#F5F5DC",
    letterSpacing: 1.5,
    textAlign: "center",
    marginBottom: 6,
  },
  modeSubtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F5F5DC",
    letterSpacing: 0.5,
    textAlign: "center",
    marginBottom: 8,
  },
  modeDescription: {
    fontSize: 12,
    fontWeight: "400",
    color: "#F5F5DC",
    textAlign: "center",
    lineHeight: 16,
    opacity: 0.9,
  },
});