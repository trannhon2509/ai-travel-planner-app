import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "outfit",
          }}
        >
          AI Travel Planner
        </Text>
        <Text style={{ textAlign: "center", color: Colors.GRAY }}>
          Discover your next adventure effortlessly.Personalized itineraries at
          your fingertips. Travel smarter with Al-driven insights."
        </Text>
       <TouchableOpacity
        onPress={ () => router.push('auth/sign-in')}
       >
          <Text style={styles.button}>
            Get started
          </Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: 450,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    fontFamily: "outfit",
  },
  button: {
    padding: 15,
    borderRadius: 99,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 17,
    marginTop: '10%'
  },
});
