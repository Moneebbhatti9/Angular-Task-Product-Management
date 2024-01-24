import { Component, ChangeDetectorRef } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private MainService: MainService) {}

  categoryForm: FormGroup = new FormGroup({
    categoryName: new FormControl('', [Validators.required]),
    categoryStatus: new FormControl('', [Validators.required]),
  });

  onSubmitCategoryForm() {
    const { categoryName, categoryStatus } = this.categoryForm.value;

    this.MainService.addCategory({
      _id: Math.random() + 1,
      categoryName,
      categoryStatus: categoryStatus === 'Active',
    });

    this.categoryForm.reset();
  }
}
