import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css'],
})
export class VendorsComponent {
  constructor(private MainService: MainService) {}

  vendorForm: FormGroup = new FormGroup({
    vendorFirstName: new FormControl('', Validators.required),
    vendorLastName: new FormControl('', Validators.required),
    vendorCountry: new FormControl('', Validators.required),
    vendorCity: new FormControl('', Validators.required),
    vendorEmail: new FormControl('', [Validators.required, Validators.email]),
    contactNumber: new FormControl(null, Validators.required),
  });

  onVendorFormSubmit = () => {
    if (this.vendorForm.invalid) {
      this.vendorForm.markAllAsTouched();
      return;
    }
    const {
      vendorEmail,
      vendorFirstName,
      vendorLastName,
      vendorCountry,
      vendorCity,
      contactNumber,
    } = this.vendorForm.value;

    const vendorData = {
      _id: 0,
      email: vendorEmail,
      firstName: vendorFirstName,
      lastName: vendorLastName,
      country: vendorCountry,
      city: vendorCity,
      contactNumber: contactNumber,
    };

    this.MainService.addVendor(vendorData);
    console.log('Vendor Added', vendorData);
    this.vendorForm.reset();
  };
}
