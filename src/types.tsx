export type RootStackParamList = {
    Home: undefined;
    Products: undefined;
    ProductDetail: { item: Product, };
    CategoriesScreen: undefined;
    ConfigureCategory : {categoryId : number}
   
  };
  
  
  export type Product = {
    item?: []
    id: number;
    name: string;
    categoryId?: string;
    quantityPerUnit?:string
    unitPrice?:string

    // Diğer özellikler...
  };
  
  