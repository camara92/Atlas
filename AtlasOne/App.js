import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardType, ScrollView, FlatList, keyextrractor } from 'react-native';

export default function App() {
  // var
  const obj = [
    {
      id: "1", name: "Stan", age: 15
    }, 
    {
      id: "2", name: "Daouda", age: 150
    }, 
    {
      id: "3", name: "Stive", age: 14    }, 
    {
      id: "4", name: "Michaelle", age: 1020
    },  {
      id: "5", name: "Close", age: 30
    }, 
    {
      id: "6", name: "Sarahddd", age: 125
    }, 
    {
      id: "7", name: "Stan", age: 15
    }, 
    {
      id: "8", name: "Daouda", age: 150
    }, 
    {
      id: "9", name: "Stive", age: 14    }, 
    {
      id: "10", name: "Michael", age: 1020
    },  {
      id: "11", name: "Clossse", age: 30
    }, 
    {
      id: "12", name: "Suilo", age: 12
    }
  ]
  const [family, setFamily] = useState(obj);
 // console.log(family); 
//  ScrollView39 : affichage totale verticale 
// flatlist est plus performant que le scrollview 
// intéret en cas de des datas qui sont largemnt bcp 
// methoide de recup des datas qui est en render : fct fleché 
// keyextrractor 
//  <View key={item.id} "s"tyle={styles.viewlist}>
// les id d"o"ivent etre en chaine de caracteres 
// https://bvaughn.github.io/react-virtualized/#/components/ScrollSync 
// A voir absolutely 

const renderItem =({item})=> 
 
  (
    <View  style={styles.viewlist}>
      
      <Text style={styles.text}> 
        <Text style={styles.textbold}>Nom : </Text>
       {item.name}</Text>
      <Text style={styles.text}>
         <Text style={styles.textbold}>Age :</Text>
          {item.age}
      </Text>
     
    </View>
  )

  return (
    <View style={styles.wrapper}>
      <FlatList 
      data={family}
      renderItem={renderItem}
      keyextrractor={item=> item.id}

    />
    
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
