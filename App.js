//import { StatusBar } from 'expo-status-bar';
import react, {useState} from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [count, setCount] = useState(0);  
  return (
   
    <View style={styles.container}>
    <Text style={styles.counter}>{ count }</Text>
    {/* evenement onpress pour déclencher l'evenement   */}
    <Button onP ress={()=> setCount(count +1)}  title="+1" />
  
    
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
  counter: {
    backgroundColor: "orange", 
    width: 30, 
   fontSize: 40, 
   textAlign: 'center'

  }
});
