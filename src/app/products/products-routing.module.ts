import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
  {
    path: 'addproduct',
    component: ProductsComponent,
  },
  {
    path: 'productlist',
    component: ProductlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
