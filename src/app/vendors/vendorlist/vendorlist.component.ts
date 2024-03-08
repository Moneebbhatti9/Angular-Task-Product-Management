import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vendor } from '../VendorInterface';
import { MainService } from 'src/app/services/main.service';
import { VendorModalComponent } from 'src/app/modal/vendor-modal/vendor-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorlist',
  templateUrl: './vendorlist.component.html',
  styleUrls: ['./vendorlist.component.css'],
})
export class VendorlistComponent implements OnInit {
  vendors: Vendor[] = [];

  constructor(
    private mainService: MainService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.vendors = this.mainService.getVendors();
  }

  onAddVendor() {
    this.router.navigate(['/vendors/addvendor']);
  }

  deleteVendor(vendorId: number) {
    this.mainService.deleteVendor(vendorId);
  }

  editVendor(vendor: Vendor) {
    const modalRef = this.modalService.open(VendorModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.vendor = { ...vendor };

    modalRef.componentInstance.vendorUpdated.subscribe(
      (updatedVendor: Vendor) => {
        const index = this.vendors.findIndex(
          (v) => v._id === updatedVendor._id
        );
        if (index !== -1) {
          this.vendors[index] = updatedVendor;
        }
      }
    );
  }

  onSearch(event: any): void {
    console.log('category search', event);
    const query = (event.target as HTMLInputElement).value;
    this.vendors = this.vendors.filter(
      (vendor) =>
        vendor.firstName.toLowerCase().includes(query.toLowerCase()) ||
        vendor.lastName.toLowerCase().includes(query.toLowerCase())
    );
  }
}
