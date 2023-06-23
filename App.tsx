// Import required modules from React and React Navigation
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// We import the files containing the code of our screens
import HomeScreen from './src/screens/HomeScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import ConfigureCategory from './src/screens/ConfigureCategory';
// We import the type definitions for our navigation stack
import { RootStackParamList } from './src/types';

// We create a navigation stack using the createStackNavigator function
const Stack = createStackNavigator<RootStackParamList>();

// We define the main component of our application
const App: React.FC = () => {
  return (
    // NavigationContainer component manages navigation state and keeps all screens together
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="ConfigureCategory" component={ConfigureCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// We export the main component of our application, so it can be imported from the index.js file
export default App;
