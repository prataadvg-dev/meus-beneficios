import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default ButtonTeste = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
      <>
        <View /* style={styles.countContainer} */>
            <Text>Count: {count}</Text>
        </View><TouchableOpacity
            style={styles.button}
        >
                <Text>Press Here</Text>
            </TouchableOpacity>
        </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    //padding: 10
  },
  countContainer: {
    alignItems: "center",
    //padding: 10
  }
});