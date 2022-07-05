import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardType, ScrollView } from 'react-native';

export default function App() {
  // var
  const obj = [
    {
      id: 1, name: "Stan", age: 15
    }, 
    {
      id: 2, name: "Daouda", age: 150
    }, 
    {
      id: 3, name: "Stive", age: 14    }, 
    {
      id: 4, name: "Michaelle", age: 1020
    },  {
      id: 5, name: "Close", age: 30
    }, 
    {
      id: 6, name: "Sarahddd", age: 125
    }, 
    {
      id: 7, name: "Stan", age: 15
    }, 
    {
      id: 8, name: "Daouda", age: 150
    }, 
    {
      id: 9, name: "Stive", age: 14    }, 
    {
      id: 10, name: "Michael", age: 1020
    },  {
      id: 11, name: "Clossse", age: 30
    }, 
    {
      id: 12, name: "Suilo", age: 12
    }
  ]
  const [family, setFamily] = useState(obj);
 // console.log(family); 
//  scrollview : affichage totale verticale 


  return (
    <View style={styles.wrapper}>
     <ScrollView>
      {/* methode map pour afficher les datas json  */}
      {
      family.map(member=>{
        return (
          <View key={member.id} style={styles.viewlist}>
            
            <Text style={styles.text}> 
              <Text style={styles.textbold}>Nom : </Text>
             {member.name}</Text>
            <Text style={styles.text}>
               <Text style={styles.textbold}>Age :</Text>
                {member.age}
            </Text>
           
          </View>
        )
      })
      }
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
 wrapper:{
  padding: 20, 

 }, 
 viewlist:{
  marginTop: 30, 
  backgroundColor: "purple", padding: 19, 
 
 }
 , 
 text:{
  color: "white", 
  fontSize:20
 }, 
 textbold:{
  fontWeight: "bold"
 }
});
