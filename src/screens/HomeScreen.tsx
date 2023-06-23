import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

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

type NavigationItem = {
  header: string;
  navigate: any;
};

const navigationData: NavigationItem[] = [
  {header:'Products', navigate : 'Products'},
  {header:'Categories', navigate : 'CategoriesScreen'},
  {header:'ConfigureCategory', navigate : 'ConfigureCategory'}
]

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <ScrollView>
     {navigationData.map(item=>{
        return(
            <TouchableOpacity onPress={()=>navigation.navigate(item.navigate)} style={{flex:1, backgroundColor:'green', marginBottom:10, alignItems:'center',borderRadius:10,paddingVertical:10}}>

                <Text style={{fontWeight:'bold',fontSize:18}}>{item.header}</Text>
            </TouchableOpacity>
        )
     })}
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
