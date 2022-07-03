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
// ******************************************************************
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
  // 
  import React from "react";
import { View, Text, StyleSheet } from "react-native";
//const name= "Daouda"; 


export default function App(){
  const getNames=(firstname, secondname, thirdname)=>{

   // return fistname+"", secondname +"", thirdnaame +""
   return `${firstname} ${secondname}  ${thirdname}` ;
  
  };
  return (
 <Text style={styles.wrapper}>Je m'appelle  {getNames("Daouda", "CAMARA", "Atlas")}.</Text>
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
// ***********************************************2

  import React from "react";
import { View, Text, StyleSheet } from "react-native";
//const name= "Daouda"; 


export default function App(){
  const getNames=(firstname, secondname, thirdname)=>{

   // return fistname+"", secondname +"", thirdnaame +""
   return `${firstname} ${secondname}  ${thirdname}` ;
  
  };
  return (
 <Text style={styles.wrapper}>Je m'appelle  {getNames("Daouda", "CAMARA", "Atlas")}.</Text>
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
  // ******************************************************3

  import React from "react";
import { View, Text, StyleSheet } from "react-native";
//const name= "Daouda"; 


export default function App(){
  const getNames=(firstname, secondname, thirdname)=>{

   // return fistname+"", secondname +"", thirdnaame +""
   return `${firstname} ${secondname}  ${thirdname}` ;
  
  };
  return (
 <Text style={styles.wrapper}>Je m'appelle  {getNames("Daouda", "CAMARA", "Atlas")}.</Text>
  );
  } 
  // différentes propriétés styles par des variables js 
  //creation des styles sous formes de classes styles 
  //en react native les propriétés ne sont cependant héritables comme dans le cas du hrml css classique 
  // les props comme propriétés permet de customiser nos composants React et ReactNative en passant des datas entre les composants.  
  
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


 // ****************************ibj hook useState***********

  import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//const name= "Daouda"; 
// accessibilityLabel="Learn more about this purple button" : personne non voyant 
// event avec btn 

export default function App(){
 
    const obj = {
      name: "CAMARA",
      age: 25
    }
    const [info,setInfo ]= useState(obj); 
    const handlePress =()=>{
      setInfo({
        name:"Daouda", age: 27
      })
    }
   return(
    <View style={styles.wrapper}>
      <Text style={styles.textFS20}>Nom : {info.name}  </Text>
      <Text style={styles.textFS20}>Age : {info.age} </Text>
      <Button title="Cliquer ici " onPress={handlePress} >
      </Button>
    </View>
   )
  
  };
 

  const styles = StyleSheet.create({
    wrapper: {
      marginTop:80, flexDirection: "column"
    }, 
    textOne: {fontFamily:"Cochin"}, 
    textTwo: {fontFamily:"Arial", fontWeight: "bold", color: "white"}, 
    textThree: {fontFamily:"Times New Roman", color: "red"},
    view1: {backgroundColor: "green"}, 
    view2: {backgroundColor: "blue"},
    textFS20: {fontSize: 20}
  })