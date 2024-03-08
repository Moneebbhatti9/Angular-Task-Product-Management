import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from './../ProductInterface';
import { MainService } from 'src/app/services/main.service';
import { Route, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductModalComponent } from 'src/app/modal/product-modal/product-modal.component';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  Products: Product[] = [];
  originalProducts: Product[] = [];
  noMatch: boolean = false;

  constructor(
    public mainService: MainService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.Products = this.originalProducts = this.mainService.getProducts();

    console.log(this.Products);
  }

  onAddProductClick() {
    this.router.navigate(['/products/addproduct']);
  }

  deleteProduct(categoryId: number) {
    this.mainService.deleteProduct(categoryId);
  }

  onSearch(event: any): void {
    const query = (event.target as HTMLInputElement).value;
    this.Products = this.mainService.searchProducts(query);

    this.noMatch = this.Products.length === 0;
  }

  onFilterButtonClick(maxPrice: number): void {
    const cheapProducts = this.mainService.getCheapProducts(maxPrice);

    this.Products = cheapProducts;
  }

  clearFilters(): void {
    this.Products = this.originalProducts;
  }

  editProduct(product: Product) {
    const modalRef = this.modalService.open(ProductModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.product = { ...product };

    modalRef.componentInstance.productUpdated.subscribe(
      (updatedProduct: Product) => {
        const index = this.Products.findIndex(
          (p) => p._id === updatedProduct._id
        );
        if (index !== -1) {
          this.Products[index] = updatedProduct;
        }
      }
    );
  }
}
