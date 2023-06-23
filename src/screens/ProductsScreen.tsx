import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { StyleSheet } from 'react-native';
// Define the types for the stack navigation and for the products
type ProductsScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Products'>;
};

type Product = {
  id: number;
  name: string;
};
// Define the ProductsScreen component
const ProductsScreen: React.FC<ProductsScreenProps> = ({ navigation }) => {
    // Set the initial state for the products
  const [products, setProducts] = useState<Product[]>([]);
  // Fetch the products when the component is mounted
  useEffect(() => {
    fetch('https://northwind.vercel.app/api/products')
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);
  // Define a function to delete an item from the products array
  const deleteItem = (product: Product) => {
    let newData = products.filter(item => item.id !== product.id)
    setProducts(newData)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products Screen</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('ProductDetail', { item })}
          >
            <Text style={styles.productText}>{item.name}</Text>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteItem(item)}
            >
              <Text style={styles.deleteText}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
// Define the styles for the ProductsScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#444',
    textAlign: 'center',
    marginBottom: 20,
  },
  listItem: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  productText: {
    flex: 1,
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff4444',
    borderRadius: 15,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
    // ...rest of the styles...
});

export default ProductsScreen;
