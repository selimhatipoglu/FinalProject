import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for the stack navigation and for the products
type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  ProductDetail: { item: Product };
};

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList>;
};

type Product = {
  id: number;
  name: string;
};
// Define a type for the navigation items
type NavigationItem = {
  header: string;
  navigate: any;
};
// Define the navigation data
const navigationData: NavigationItem[] = [
  {header:'Products', navigate : 'Products'},
  {header:'Categories', navigate : 'CategoriesScreen'},
  {header:'Configure Category', navigate : 'ConfigureCategory'}
]
// Define the HomeScreen component
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Welcome!</Text>
        <ScrollView>
     {navigationData.map((item, index) => {
        return(
            <TouchableOpacity 
                key={index} 
                onPress={()=>navigation.navigate(item.navigate)} 
                style={styles.button}>

                <Text style={styles.buttonText}>{item.header}</Text>
            </TouchableOpacity>
        )
     })}
     </ScrollView>
    </View>
  );
};
// Define the styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    backgroundColor: '#1e212d',
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ff9800',
    textAlign: 'center',
  },
  button: {
    flex: 1, 
    backgroundColor: '#3e424d', 
    marginBottom: 10, 
    alignItems:'center',
    borderRadius:10,
    paddingVertical:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    fontWeight:'bold',
    fontSize:22,
    color: '#ff9800'
  }
    // ...rest of the styles...
});

export default HomeScreen;
