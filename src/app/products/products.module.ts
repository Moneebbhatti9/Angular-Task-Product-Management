import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, ProductlistComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
})
export class ProductsModule {}
