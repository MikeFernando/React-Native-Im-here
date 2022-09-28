import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#1F1E25",
    borderRadius: 6,
    marginBottom: 10
  },
  name: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
    padding: 15,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#ff5555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22
  }
})