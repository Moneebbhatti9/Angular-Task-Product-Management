import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Category } from '../categories/CategoryInterface';
import { Vendor } from '../vendors/VendorInterface';
import { Product } from './ProductInterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  categories: Category[] = [];
  vendors: Vendor[] = [];

  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private mainService: MainService) {}

  ngOnInit() {
    this.categories = this.mainService
      .getCategories()
      .filter((category) => category.categoryStatus);

    this.vendors = this.mainService.getVendors();

    this.initProductForm();
  }

  initProductForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      selectCategory: ['', Validators.required],
      selectVendor: ['', Validators.required],
      productDescription: ['', Validators.required],
      productImage: [null],
    });
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    this.productForm.patchValue({
      productImage: file,
    });
  }

  onSubmitAddProduct() {
    if (this.productForm.valid) {
      const newProduct: Product = {
        _id: 0,
        productName: this.productForm.value.productName,
        productPrice: this.productForm.value.productPrice,
        categoryId: this.productForm.value.selectCategory,
        vendorId: this.productForm.value.selectVendor,
        productDescription: this.productForm.value.productDescription,
        productImage: this.productForm.value.productImage,
      };

      this.mainService.addProduct(newProduct);
      console.log('Added product', newProduct);
      this.productForm.reset();
    } else {
      alert('Form is invalid');
    }
  }
}
