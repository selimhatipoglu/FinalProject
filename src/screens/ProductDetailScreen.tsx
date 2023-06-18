import React,{useEffect, useState,} from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ProductDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
};

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route }) => {
  const { item } = route.params;
  const [productDetail, setProductDetail] = useState([]);

  
  useEffect(() => {

    fetch(`https://northwind.vercel.app/api/products/${item?.id}`)
      .then((response) => response.json())
      .then((json) => setProductDetail(json));
  }, []);


  console.log('PRODUCTDE', productDetail)
  return (
    <View style={{borderWidth:2, borderRadius:10, paddingHorizontal:10,
     margin:10}}>
      <Text style={{fontWeight:'bold', fontSize:18}}>Product Detail</Text>
      <View style={{borderWidth:1, borderRadius:6, margin:10, padding:10}}>
      <Text style={{color:'blue'}}>Id :{item.id}</Text>
      <Text>İsim :{item.name}</Text>
      <Text>Adedi :{item.quantityPerUnit}</Text>
      <Text>Fiyatı :{item.unitPrice}</Text>
      <Text>Kategori Id :{item.categoryId}</Text>
      </View>
      
    </View>
  );
};

export default ProductDetailScreen;
