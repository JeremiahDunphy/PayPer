import { StyleSheet } from "react-native";

export const LoginPageStyles = StyleSheet.create({
  container: {
    backgroundColor: "#6B5B95",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export const LoginUIStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputContainer: {
    overflow: "hidden",
    width: "80%",
    marginBottom: 20,
    backgroundColor: "linear-gradient(45deg, #f3ec78, #af4261)",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  outerText: {
    flex: 1,
  },
  inputField: {
    flex: 3,
    borderColor: "gray",
  },
});

export const LoginButtonStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
  },
  buttonStyle: {
    padding: 12,
    margin: 12,
    backgroundColor: "#f9690e",
    borderWidth: 1,
    borderColor: "#f9690e",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    width: "30%",
    alignItems: "center",
  },
  text: {
    color: "#fdf6f1",
    fontSize: 18,
  },
});

export const photoStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  banner: {
    width: "80%",
    height: "30%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
