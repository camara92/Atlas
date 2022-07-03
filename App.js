import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
//const name= "Daouda"; 
// accessibilityLabel="Learn more about this purple button" : personne non voyant 
// event avec btn 
// input en react native 
// et propriétés : placeholder, length, max, min 
export default function App(){
 
    const obj = {
      name: "CAMARA",
      age: 25
    }
    const [info,setInfo ]= useState(obj); 
    const handlePress =()=>{
      setInfo({
        name:"Daouda", age: 27
      }); 
      
    }
    const [name, setName] =useState("Diallo"); 
   return(
    <View style={styles.wrapper}>
      <Text style={styles.textFS20}>Nom : {info.name}  </Text>
      <Text style={styles.textFS20}>Age : {info.age} </Text>
      <Text style={styles.textFS20}> { name} </Text>
      {/* <Button title="Cliquer ici " onPress={handlePress}/ > */}

      <Button title="Cliquer ici " onPress={ ()=> setInfo({
        name:"KingLife", age:25
        
      })}/ >
   
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