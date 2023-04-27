import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Second({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>second screen -- tab</Text>
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
