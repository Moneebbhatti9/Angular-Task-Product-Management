// product-modal.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../../products/ProductInterface';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css'],
})
export class ProductModalComponent implements OnInit {
  @Input() product: Product = {} as Product;
  @Output() productUpdated = new EventEmitter<Product>();
  productForm!: FormGroup;
  categories: any = this.mainService.getCategories();
  vendors: any = this.mainService.getVendors();

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    public mainService: MainService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.productForm = this.fb.group({
      productName: [this.product.productName, Validators.required],
      productPrice: [this.product.productPrice, Validators.required],
      selectCategory: [this.product.categoryId, Validators.required],
      selectVendor: [this.product.vendorId, Validators.required],
      productDescription: [this.product.productDescription],
    });
  }

  onSaveChanges() {
    if (this.productForm.valid) {
      const updatedProduct: Product = {
        ...this.product,
        productName: this.productForm.value.productName,
        productPrice: this.productForm.value.productPrice,
        categoryId: this.productForm.value.selectCategory,
        vendorId: this.productForm.value.selectVendor,
        productDescription: this.productForm.value.productDescription,
      };

      this.productUpdated.emit(updatedProduct);

      this.activeModal.close('Save changes click');
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
