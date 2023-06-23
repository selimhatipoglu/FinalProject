import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
// Define category type
type Category = {
  id: number;
  name: string;
};
// Define navigation prop type for CategoriesScreen
type CategoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoriesScreen'>;
// Define props for CategoriesScreen
type Props = {
  navigation: CategoriesScreenNavigationProp;
};

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
    // Initialize categories state
  const [categories, setCategories] = useState<Category[]>([]);
   // Function to load categories from API
  const loadCategories = () => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }

    // useEffect to call loadCategories on component mount and every time navigation focus changes
  useEffect(() => {
    loadCategories();
    const unsubscribe = navigation.addListener('focus', () => {
      loadCategories();
    });

    return unsubscribe;
  }, [navigation]);
// Function to delete a category from the local state
  const deleteItem = (category: any) => {
    let newData = categories.filter(item => item.id !== category.id);
    setCategories(newData);
  }
  // Function to navigate to ConfigureCategory screen with the category id
  const navigateToAdd = (categoryId: number) => {
    navigation.navigate('ConfigureCategory', { categoryId });
  }
  // Render CategoriesScreen
  return (
    // ...Rest of the code...
    <View style={styles.container}>
      <Text style={styles.title}>Categories Screen</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryBox}>
            <Text style={styles.categoryText}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => deleteItem(item)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Sil</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigateToAdd(item.id)} style={styles.addButton}>
                <Text style={styles.addText}>Ekle</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};
// Stylesheet for CategoriesScreen
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
  categoryBox: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryText: {
    flex: 1,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4444',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  deleteText: {
    color: '#fff',
  },
  addButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0077b6',
    padding: 10,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  addText: {
    color: '#fff',
  },
    // ...Rest of the styles...
});

export default CategoriesScreen;
