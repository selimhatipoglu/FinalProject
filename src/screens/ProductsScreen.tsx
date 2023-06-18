import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList , TouchableOpacityBase, TouchableOpacity} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type ProductsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Products'>;
};

type Product = {
  id: number;
  name: string;
};

const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  const deleteItem = (product :Product) => {
    let newData = products.filter(item=>item.id !== product.id)
    setProducts(newData)
  }

  return (
    <View>
      <Text>Products Screen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={{marginVertical:10, marginHorizontal:10, borderRadius:6, flexDirection:'row', borderWidth:1, paddingHorizontal:10, paddingVertical:8, alignItems:'center'}}  onPress={() => navigation.navigate('ProductDetail', { item })}>
          <Text style={{flex:1}}>{item.name}</Text>

          <TouchableOpacity style={{width:30, height:30, alignItems:'center', justifyContent:'center'}} onPress={()=>deleteItem(item)}>
            <Text style={{color:'red'}}>X</Text>
          </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
