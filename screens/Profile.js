import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>profile</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
