import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList,TouchableOpacity,TextInput } from 'react-native';

type Category = {
  id: number;
  name: string;
};

const CategoriesScreen: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData,setFormData] = useState({
    categoryName:'',
    categoryDetail:'',
  })

  useEffect(() => {
    fetch('https://northwind.vercel.app/api/categories')
      .then((response) => response.json())
      .then((json) => setCategories(json));
  }, []);

  return (
    <View>
      <Text>Categories Screen</Text>

      <View style={{marginHorizontal:10,marginVertical:10, paddingHorizontal:10, borderWidth:2, borderRadius:10}}>
        <View>
      <Text>Kategori Ekle</Text>

      <View style={{flexDirection:'row', borderWidth:0.5,borderRadius:6, padding:6, marginVertical:10, alignItems:'center'}}>
      <Text>Kategori Adı:</Text>
      <TextInput value={formData.categoryName} onChangeText={(value)=> setFormData(prevUser => ({
    ...prevUser,
   categoryName:value
  }))} />
      </View>
      <View style={{flexDirection:'row',  borderWidth:0.5,borderRadius:6, padding:6,alignItems:'center', marginVertical:10}}>
      <Text>Kategori Detayı:</Text>
      <TextInput value={formData.categoryDetail} onChangeText={(value)=> setFormData(prevUser => ({
    ...prevUser,
   categoryDetail:value
  }))}/>
      </View>
      <TouchableOpacity style={{ backgroundColor:'green', paddingVertical:10, alignItems:'center', borderRadius:10, marginBottom:10}}>
        <Text>Ekle</Text>
      </TouchableOpacity>
      </View>
      </View>
    
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            {/* Diğer kategori detayları... */}
          </View>
        )}
      />
    </View>
  );
};

export default CategoriesScreen;
