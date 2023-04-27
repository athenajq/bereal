import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Next({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>next screen from home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
