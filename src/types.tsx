
// Type definitions for the different screens in the navigation stack
export type RootStackParamList = {
      // The Home, Products, and CategoriesScreen don't take any parameters
    Home: undefined;
    Products: undefined;
        // The ProductDetail screen takes an 'item' parameter, which is a Product
    ProductDetail: { item: Product, };
    CategoriesScreen: undefined;
        // The ConfigureCategory screen takes a 'categoryId' parameter, which is a number
    ConfigureCategory : {categoryId : number}
   
  };
  
  // Type definition for a Product
  export type Product = {
        // Optional item property, which is an array
    item?: []
        // Required properties for a Product
    id: number;
    name: string;
        // Optional properties for a Product
    categoryId?: string;
    quantityPerUnit?:string
    unitPrice?:string

    
  };
  
  