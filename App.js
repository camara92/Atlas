//import { StatusBar } from 'expo-status-bar';
import react from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
  {/* <Text>Bonjour Daouda Camus !</Text> */}
    <Text></Text>
     <Button title="+1"/>
      
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
});
