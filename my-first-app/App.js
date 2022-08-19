import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container2}>
      <Text style={styles.fcolor}>HELLO WORLD !!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    // color: '#fff'
  },

  fcolor: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 900,
    fontStyle: "italic",
    letterSpacing: 20,
    // textDecorationLine:'underline',
    textShadowColor: '#f00',
    textShadowOffset: {width: 5, height: 3}
  }
});