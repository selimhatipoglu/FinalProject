import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList,TouchableOpacity,TextInput } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

type Category = {
  id: number;
  name: string;
};

type CategoriesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CategoriesScreen'>;

type Props = {
  navigation: CategoriesScreenNavigationProp;
};

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  const deleteItem = (category: any) => {
    let newData = categories.filter(item => item.id !== category.id);
    setCategories(newData);
  }

  const navigateToAdd = (categoryId: number) => {
    navigation.navigate('ConfigureCategory', { categoryId });
  }

  return (
    <View>
      <Text>Categories Screen</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ borderWidth: 2, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ flex: 1 }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', flex: 1 }}>
                <TouchableOpacity onPress={() => deleteItem(item)} style={{ flex: 1, borderWidth: 0.5, marginRight: 2, alignItems: 'center' }}>
                  <Text style={{ color: 'red' }}>Sil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToAdd(item.id)} style={{ flex: 1, borderWidth: 0.5, marginLeft: 2, alignItems: 'center' }}>
                  <Text style={{ color: 'blue' }}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
