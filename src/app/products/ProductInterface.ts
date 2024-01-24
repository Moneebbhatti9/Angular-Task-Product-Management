export interface Product {
  _id: number;
  productName: string;
  productPrice: number;
  categoryId: number;
  vendorId: number;
  productDescription: string;
  productImage: File | string | null;
}
