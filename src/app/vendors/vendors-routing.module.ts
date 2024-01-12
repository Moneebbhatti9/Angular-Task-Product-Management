import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsComponent } from './vendors.component';
import { VendorlistComponent } from './vendorlist/vendorlist.component';

const routes: Routes = [
  {
    path: 'addvendor',
    component: VendorsComponent,
  },
  {
    path: 'vendorlist',
    component: VendorlistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorsRoutingModule {}
