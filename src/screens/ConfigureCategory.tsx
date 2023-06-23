import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

// Define props for the ConfigureCategory component
type ProductDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ConfigureCategory'>;
};
// Define the ConfigureCategory component
const ConfigureCategory: React.FC<ProductDetailScreenProps> = ({ route }) => {
  // Initialize the formData state
  const [formData, setFormData] = useState({
    categoryName: '',
    categoryDetail: '',
  })
  // Define the serviceCall function which makes a POST request to add a new category
  const serviceCall = async () => {
        // Check if all fields are filled
    if (formData.categoryName !== '' && formData.categoryDetail !== '') {
      // POST request
      const response = await fetch('https://northwind.vercel.app/api/categories', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.categoryName,
          description: formData.categoryDetail
        })
      });
      // Get the data from the response
      const data = await response.json();
            // Check if the request was successful
      if (data.id) {
        Alert.alert("Success", "Kategori başarıyla eklendi.");
        setFormData({
          categoryName: '',
          categoryDetail: '',
        });
      }
      else {
        Alert.alert("Error", "Kategori eklenemedi, lütfen tekrar deneyin.");
      }
    }
    else {
      Alert.alert("Warning", "Lütfen tüm alanları doldurun.");
    }
  }
  // Render the ConfigureCategory component
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Kategori Adı:</Text>
        <TextInput
          style={styles.inputField}
          value={formData.categoryName}
          onChangeText={(value) => setFormData(prevUser => ({
            ...prevUser,
            categoryName: value
          }))}
        />
      </View>
      <View style={styles.inputRow}>
        <Text style={styles.inputLabel}>Kategori Detayı:</Text>
        <TextInput
          style={styles.inputField}
          value={formData.categoryDetail}
          onChangeText={(value) => setFormData(prevUser => ({
            ...prevUser,
            categoryDetail: value
          }))}
        />
      </View>
      <TouchableOpacity onPress={() => serviceCall()} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}
// Stylesheet for ConfigureCategory
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
  },
  inputLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  inputField: {
    flex: 3,
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#0077b6',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
    // ...Rest of the styles...
});

export default ConfigureCategory;
