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