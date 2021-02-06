import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to components demo" 
        onPress={() => navigation.navigate("ComponentScreen")}
      />
      <Button 
        title="Go to list demo" 
        onPress={() => navigation.navigate("List")}
      />
      <TouchableOpacity onPress={() => navigation.navigate("ComponentScreen")}>
        <Text>
          Go to list demo
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;