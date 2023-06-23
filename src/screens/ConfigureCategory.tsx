import React, {useState} from "react";
import { View, Text,TextInput,TouchableOpacity } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type ProductDetailScreenProps = {
    route: RouteProp<RootStackParamList, 'ConfigureCategory'>;
  };


const ConfigureCategory: React.FC<ProductDetailScreenProps> = ({ route }) => {
    const {categoryId} =route.params;
    const [formData,setFormData] = useState({
        categoryName:'',
        categoryDetail:'',
      })

      const serviceCall = () => {
        if(formData.categoryName!=='' && formData.categoryDetail!==''){
    
        }
      }
    return (
        <View>
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
      <TouchableOpacity onPress={()=>serviceCall()} style={{ backgroundColor:'green', paddingVertical:10, alignItems:'center', borderRadius:10, marginBottom:10}}>
        <Text>Ekle</Text>
      </TouchableOpacity>
      </View>
      
    )
}

export default ConfigureCategory;