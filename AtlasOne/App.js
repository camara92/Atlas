import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardType } from 'react-native';

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
      id: 6, name: "Sarah", age: 125
    }
  ]
  const [family, setFamily] = useState(obj);
 // console.log(family); 
 

  return (
    <View style={styles.wrapper}>
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
    </View>
  );
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
