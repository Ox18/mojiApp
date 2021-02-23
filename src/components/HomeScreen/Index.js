import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Alert, 
  StatusBar,
  StyleSheet,
  Image,
  FlatList
} from 'react-native';


import searchByName from '../../Services/drink';

import Style from './Style';

const HomeScreen = () => {
  const [drink, setDrink] = useState('');
  const [bebida, setBebida] = useState([]);
  const [loading, setLoading] = useState('Search');

  const SearchDrink = async (name) => {
    setLoading('Loading...');
    setBebida([]);

    const response = await searchByName(name);
    const { message, messageDetail, data } = response;
    if(data.length > 0){
      setBebida(data);
    }
    else{
      Alert.alert(messageDetail);
    }
    setLoading('Search');
  };

  const Item = ({ data }) => (
  <View style={Style.item}>
    <Text style={Style.title}>{data.strDrink}</Text>
    <Image source={{ uri: data.strDrinkThumb }} style={Style.imgStyle}/>
  </View>
);
  const renderItem = ({ item })=>{
    return(
      <Item data={item} />
    )
  }
  return (
    <View style={Style.viewStyle}>
    
      <TextInput
        style={Style.textInputSearch}
        onChangeText={(text) => setDrink(text)}
        placeholder="for example: 'Pisco' "
        value={drink}
      />

      <TouchableOpacity
        style={Style.buttonSearch}
        onPress={() => {
          SearchDrink(drink);
        }}>

        <Text style={Style.textSearch}>
          {loading} 🔍
        </Text>
        
      </TouchableOpacity>
  <FlatList
      data={bebida}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      >
      </FlatList>
      
    </View>
  );
};


export default HomeScreen;
