import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorlistComponent } from './vendorlist/vendorlist.component';
import { VendorsComponent } from './vendors.component';

@NgModule({
  declarations: [VendorsComponent, VendorlistComponent],
  imports: [CommonModule, VendorsRoutingModule],
})
export class VendorsModule {}
