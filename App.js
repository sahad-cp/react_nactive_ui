import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-blue-700" >Open up App.js to start working on your app!</Text>
      <Text>Hi dasdasD</Text>
      <Text style={styles.textColor}>kjfg;lsdkjlfl;sdkf;sdkl</Text>
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
    color:'red'
  },
  textColor:{
    color:'red'
  }
});
