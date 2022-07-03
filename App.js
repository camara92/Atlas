import React, {useState} from "react";
import { View, Text, StyleSheet, Button, TextInput, placeholder } from "react-native";

//const name= "Daouda"; 
// accessibilityLabel="Learn more about this purple button" : personne non voyant 
// event avec btn 
// input en react native 
// et propriétés : placeholder, length, max, min 
   {/* <TextInput style={styles.textInput} value={text}
      onChangeText={text=> setText(text)} /> */}
export default function App(){
 
  const [name, setName] = useState(); 
  const [prenom, setPrenom] = useState();
  const [age, setAge] = useState();
   return(
    <View style={styles.wrapper}>
      
   <Text style={styles.text}>Nom : {name}</Text>
   <TextInput placeholder="Taper votre nom : CAMARA " style={styles.textInput}
      onChangeText={val=> setName (val)} />
      {/* prenom */}
      <Text style={styles.text}>Prénom : {prenom}</Text>
   <TextInput placeholder="Taper votre prénom : Daouda " style={styles.textInput}
      onChangeText={valPre=> setPrenom (valPre)} />
      {/* age  */}
      <Text style={styles.text}>Age : {age}</Text>
   <TextInput placeholder="Taper votre age : 25 " style={styles.textInput}
      onChangeText={val=> setAge (val)} />
      
    </View>
   );
  
  }
 

  const styles = StyleSheet.create({
    wrapper: {
      marginTop:50, 
      // backgroundColor: "red", 
      alignItems: "center", 
      height: 200
    }, 
    textOne: {fontFamily:"Cochin"}, 
    textTwo: {fontFamily:"Arial", fontWeight: "bold", color: "white"}, 
    textThree: {fontFamily:"Times New Roman", color: "red"},
    view1: {backgroundColor: "green"}, 
    view2: {backgroundColor: "blue"},
    textFS20: {fontSize: 20}, 
    textInput: {
      height:40, 
      borderColor:"grey" ,
      borderWidth:1,
      padding: 10, 
      margin:9,
  width:"90%"
    }, text:{
      fontSize: 20, 
      
    }
  })