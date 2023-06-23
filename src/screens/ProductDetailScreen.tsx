import React,{useEffect, useState,} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

// Define props for the ProductDetailScreen
type ProductDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
};
// Define the ProductDetailScreen component
const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route }) => {
    // Extract the item from the route params
  const { item } = route.params;
  
  // Initialize the productDetail state
  const [productDetail, setProductDetail] = useState([]);

    // Load the product details when the component mounts
  useEffect(() => {
    fetch(`https://northwind.vercel.app/api/products/${item?.id}`)
      .then((response) => response.json())
      .then((json) => setProductDetail(json));
  }, []);

    // Log the product details for debugging
  console.log('PRODUCTDE', productDetail)
  
    // Render the ProductDetailScreen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Detail</Text>
      <View style={styles.detailBox}>
        <Text style={styles.idText}>Id : {item.id}</Text>
        <Text style={styles.text}>İsim : {item.name}</Text>
        <Text style={styles.text}>Adedi : {item.quantityPerUnit}</Text>
        <Text style={styles.text}>Fiyatı : {item.unitPrice}</Text>
        <Text style={styles.text}>Kategori Id : {item.categoryId}</Text>
      </View>
    </View>
  );
};
// Stylesheet for ProductDetailScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  idText: {
    fontSize: 16,
    color: '#0077b6',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
    // ...Rest of the styles...
});

export default ProductDetailScreen;
