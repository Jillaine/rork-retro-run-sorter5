import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Package } from "lucide-react-native";
import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LandingScreen() {
  const handleStartQuiz = () => {
    router.push("/mode-selection");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ImageBackground
        source={{ uri: "https://pub-e001eb4506b145aa938b5d3badbff6a5.r2.dev/attachments/ikpfli0gyzk329xje7khw" }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <Package size={80} color="#9DC183" strokeWidth={2} />
          </View>
          
          <Text style={styles.title}>METRO RUN</Text>
          <Text style={styles.subtitle}>SORT</Text>
          
          <Text style={styles.description}>
            Test your knowledge of courier runs{"\n"}and street assignments
          </Text>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={handleStartQuiz}>
          <Text style={styles.startButtonText}>START QUIZ</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5DC", // cream
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  backgroundImageStyle: {
    opacity: 0.4,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 60,
  },
  header: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  iconContainer: {
    width: 120,
    height: 120,
    backgroundColor: "#DAA520", // mustard yellow
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontWeight: "700",
    color: "#9DC183", // avocado green
    letterSpacing: 4,
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 48,
    fontWeight: "700",
    color: "#CD853F", // burnt orange
    letterSpacing: 4,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: "#9DC183",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "400",
    marginBottom: 0,
  },
  startButton: {
    backgroundColor: "#008B8B", // teal
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 8,
    minWidth: 200,
  },
  startButtonText: {
    color: "#F5F5DC",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 2,
  },
});