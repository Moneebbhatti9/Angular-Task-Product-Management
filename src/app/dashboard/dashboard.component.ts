import { Component } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private mainService: MainService) {}
  totalCategoriesCount: number = this.mainService.getCategories().length;
  totalProductsCount: number = this.mainService.getProducts().length;
  totalVendorsCount: number = this.mainService.getVendors().length;
}
