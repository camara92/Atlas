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
******************************************************************
import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function App(){

  return (
    // une seule vue parent 
    //composant text dans une autre vue 
    <View style={styles.wrapper}>
     <View style={styles.view1}>
     <Text style={styles.textOne}>
      Daouda
      <text>Bold</text>
     </Text>
     <Text style={styles.textTwo}>Daouda</Text>
     <Text style={styles.textThree}>Dav</Text>
  
     </View>
     <View style={styles.view2}>
     <Text style={styles.textTwo}>Daouda</Text>
 
     </View>
    </View>
  );
  } 
  // différentes propriétés styles par des variables js 
  //creation des styles sous formes de classes styles 
  //en react native les propriétés ne sont cependant héritables comme dans le cas du hrml css classique 

  const styles = StyleSheet.create({
    wrapper: {
      marginTop:80, flexDirection: "column"
    }, 
    textOne: {fontFamily:"Cochin"}, 
    textTwo: {fontFamily:"Arial", fontWeight: "bold", color: "white"}, 
    textThree: {fontFamily:"Times New Roman", color: "red"},
    view1: {backgroundColor: "green"}, 
    view2: {backgroundColor: "blue"}
  })
  ****************************************************************************************