export interface getProductsType {
  offset?: number; // Corrected the typo in the property name 'offest' to 'offset'
  limit?: number;
  title?: string;
  categoryId?: number; // Corrected the type to lowercase 'number'
  price_min?: number; // Corrected the type to lowercase 'number'
  price_max?: number; // Corrected the type to lowercase 'number'
}

export interface getProductType {
  id: number; // Corrected the type to lowercase 'number'
}

export interface productItemType {
  id: number; // Corrected the type to lowercase 'number'
  title: string; // Corrected the type to lowercase 'string'
  price: number; // Corrected the type to lowercase 'number'
  description: string; // Corrected the type to lowercase 'string'
  category: {
    id: number; // Corrected the type to lowercase 'number'
    name: string; // Corrected the type to lowercase 'string'
    image: string; // Corrected the type to lowercase 'string'
  };
  images: string[]; // Corrected the type to lowercase 'string'
}
