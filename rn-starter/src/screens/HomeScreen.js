import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigation.navigate("ComponentScreen")}
      />
      <Button 
        title="Go to List Demo" 
        onPress={() => navigation.navigate("List")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("ComponentScreen")}>
        <Text>
          Go to list demo
        </Text>
      </TouchableOpacity>
      <Button 
        title="Go to Image Demo" 
        onPress={() => navigation.navigate("ImageScreen")}
      />
      <Button 
        title="Go to Image Exercise Demo" 
        onPress={() => navigation.navigate("ImageExerciseScreen")}
      />
      <Button 
        title="Go to Counter Screen Demo" 
        onPress={() => navigation.navigate("CounterScreen")}
      />
      <Button 
        title="Go to Color Screen Demo" 
        onPress={() => navigation.navigate("ColorScreen")}
      />
      <Button 
        title="Go to Square Screen Demo" 
        onPress={() => navigation.navigate("SquareScreen")}
      />
      <Button 
        title="Go to Text Screen Demo" 
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button 
        title="Go to Chapter6ExerciseComponents Demo" 
        onPress={() => navigation.navigate("Chapter6ExerciseComponents")}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;