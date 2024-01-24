import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vendor } from '../../vendors/VendorInterface';

@Component({
  selector: 'app-edit-vendor-modal',
  templateUrl: './vendor-modal.component.html',
  styleUrls: ['./vendor-modal.component.css'],
})
export class VendorModalComponent implements OnInit {
  @Input() vendor: Vendor = {} as Vendor;
  @Output() vendorUpdated = new EventEmitter<Vendor>();
  vendorForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.vendorForm = this.fb.group({
      vendorFirstName: [this.vendor.firstName, Validators.required],
      vendorLastName: [this.vendor.lastName, Validators.required],
      vendorCountry: [this.vendor.country, Validators.required],
      vendorCity: [this.vendor.city, Validators.required],
      vendorEmail: [this.vendor.email, [Validators.required, Validators.email]],
      contactNumber: [this.vendor.contactNumber, Validators.required],
    });
  }

  onSaveChanges() {
    const updatedVendor: Vendor = {
      ...this.vendor,
      firstName: this.vendorForm.value.vendorFirstName,
      lastName: this.vendorForm.value.vendorLastName,
      country: this.vendorForm.value.vendorCountry,
      city: this.vendorForm.value.vendorCity,
      email: this.vendorForm.value.vendorEmail,
      contactNumber: this.vendorForm.value.contactNumber,
    };

    this.vendorUpdated.emit(updatedVendor);
    this.activeModal.close('Save changes click');
  }
}
