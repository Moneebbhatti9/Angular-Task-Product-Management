import { Injectable } from '@angular/core';
import { Category } from '../categories/CategoryInterface';
import { Vendor } from '../vendors/VendorInterface';
import { Product } from '../products/ProductInterface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private nextId = Math.floor(Math.random() * 100 + 1);

  categories: Category[] = [
    { _id: 1, categoryName: 'Fashion', categoryStatus: true },
    { _id: 2, categoryName: 'Men', categoryStatus: false },
  ];

  vendors: Vendor[] = [
    {
      _id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      contactNumber: 1234567890,
      country: 'USA',
      city: 'New York',
    },
    {
      _id: 2,
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice@example.com',
      contactNumber: 9876543210,
      country: 'Canada',
      city: 'Toronto',
    },
  ];

  products: Product[] = [
    {
      _id: 1,
      productName: 'Shirt',
      productPrice: 19.99,
      categoryId: 1,
      vendorId: 1,
      productDescription: 'Description for Product 1',
      productImage:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      _id: 2,
      productName: 'Pants',
      productPrice: 59.99,
      categoryId: 2,
      vendorId: 2,
      productDescription: 'Description for Product 2',
      productImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXFjJ6gEjXYU5U5QfSw2fYZXl68YMf7b6FQ&usqp=CAU',
    },
  ];

  constructor() {}

  addProduct(product: Product) {
    if (product.productImage) {
      this.getBase64(product.productImage).then((base64Image) => {
        product.productImage = base64Image;
        product._id = this.nextId++;
        this.products.push(product);
      });
    } else {
      product._id = this.nextId++;
      this.products.push(product);
    }
    console.log('products', this.products);
  }

  getProducts(): Product[] {
    return this.products;
  }

  getCategoryNameById(categoryId: number): string {
    const category = this.categories.find((c) => c._id === Number(categoryId));
    return category ? category.categoryName : 'Unknown Category';
  }

  getVendorNameById(vendorId: number): string {
    const vendor = this.vendors.find((v) => v._id === Number(vendorId));
    return vendor ? `${vendor.firstName} ${vendor.lastName}` : 'Unknown Vendor';
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex((p) => p._id === productId);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  addCategory(category: Category) {
    category._id = this.nextId++;
    this.categories.push(category);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  deleteCategory(categoryId: number) {
    const index = this.categories.findIndex(
      (category) => category._id === categoryId
    );
    if (index > -1) {
      this.categories.splice(index, 1);
    }
  }

  addVendor(vendor: Vendor) {
    vendor._id = this.nextId++;
    this.vendors.push(vendor);
  }

  getVendors(): Vendor[] {
    return this.vendors;
  }

  deleteVendor(vendorId: number) {
    const index = this.vendors.findIndex((vendor) => vendor._id === vendorId);
    if (index > -1) {
      this.vendors.splice(index, 1);
    }
  }

  private getBase64(file: File | string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (typeof file === 'string') {
        resolve(file);
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
      }
    });
  }

  getCheapProducts(maxPrice: number): Product[] {
    return this.products.filter((product) => product.productPrice < maxPrice);
  }

  searchProducts(query: string): Product[] {
    query = query.toLowerCase();
    return this.products.filter((product) => {
      const categoryName = this.getCategoryNameById(
        product.categoryId
      ).toLowerCase();
      const vendorName = this.getVendorNameById(product.vendorId).toLowerCase();

      return (
        product._id.toString().includes(query) ||
        categoryName.includes(query) ||
        vendorName.includes(query)
      );
    });
  }
}
