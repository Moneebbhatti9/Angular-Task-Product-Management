import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categoryName: string = '';
  categoryStatus: string = 'active';

  categoryStatusOptions = ['active', 'not active'];

  submitForm() {
    console.log('Category Name:', this.categoryName);
    console.log('Category Status:', this.categoryStatus);
  }
}
