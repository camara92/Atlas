import React, {useState, } from "react";
import { View, Text, StyleSheet, Button, TextInput, placeholder } from "react-native";
import { FlatList } from "react-native-web";
 

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
  const [email, setEmail] =useState(); 
  const [age, setAge] = useState();
 

   return(
    <View style={styles.wrapper}>
     <View>
    
     </View>
      <View style={styles.header}>
       <header>Header </header>
      </View>
      <View style={styles.parent1}>
   <TextInput placeholder="Taper votre nom : CAMARA " style={styles.textInput}
      onChangeText={val=> setName (val)} />
      <Text style={styles.text}>Nom : {name}</Text>
      {/* prenom */}
   <TextInput placeholder="Taper votre prénom : Daouda " style={styles.textInput}
      onChangeText={valPre=> setPrenom (valPre)} />
      <Text style={styles.text}>Prénom : {prenom}</Text>
      {/* age  */}
   <TextInput placeholder="Taper votre age : 25 " style={styles.textInput}
      onChangeText={val=> setAge (val)} />
      <Text style={styles.text}>Age : {age}</Text>
    {/* email */}
    <TextInput placeholder="Taper votre adresse email" style={styles.textInput}
      onChangeText={val=> setEmail (val)} />
      <Text style={styles.text}>Votre email : {email}</Text>
      <Button style={styles.btn}  title="Cliquer ici "/>
      </View>
      
      <View style={styles.header}>
       <header>Footer </header>
      </View>
    </View>
   );
  
  }
//  liste 


  const styles = StyleSheet.create({
    wrapper: {
      // marginTop:50, 
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
      
    }, 
    parent1:{
      width: "50%", 
      border: "bold", 
      backgroundColor: "", 
      color: "white", 
    }, 
    center:{
      textAlign: "center"
    }, 
    header:{
       
      backgroundColor: "blue", 
      height: 40, 
     alignItems: "center",
     color: "white"
,       width: "100%", 
      flexDirection: "row", 
      margin: 50, 
      textAlign: "center", 
      flexDirection: "row", 

    },
    btn:{
      width: "100%",
      padding: "20" , 
      color: "white",
      backgroundColor: ""
      

    }, 
    item:{
      padding: 10,
    fontSize: 18,
    height: 44,
    }, 
    container: {
      flex: 1,
      paddingTop: 22
     },
     image:{
      resizeMode: "cover", 
     }
  })