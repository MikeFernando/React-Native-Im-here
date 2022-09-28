import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 24,
  },
  nomeEvent: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 48,

  },
  dateEvent: {
    fontSize: 15,
    color: '#aaa',
  },
  input: {
    flex: 1,
    height: 56,
    padding: 22,
    fontSize: 16,
    borderRadius: 6,
    backgroundColor: '#1F1E25',
    marginTop: 10,
    color: '#fff',
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#31CF67',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 22
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    textAlign: 'center',
    color: '#ccc',
  }
})