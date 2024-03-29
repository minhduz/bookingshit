import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Start = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={"../assets/logo.jpg"} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Carousel")}
        style={styles.buttonContainer}
      >
        <Text style={styles.createButton}>Hát</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 15,
    paddingVertical: 20,
  },
  createButton: {
    fontSize: 26,
    color: "#003366",
    fontWeight: "bold",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "black", // Đặt màu nền của toàn bộ ứng dụng thành đen
  },
});
