import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Category } from './CategoryInterface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];

  constructor(private mainService: MainService) {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required]),
      categoryStatus: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.categories = this.mainService.getCategories();
    this.filteredCategories = this.categories;
  }

  categoryForm!: FormGroup;

  onSubmitCategoryForm() {
    if (this.categoryForm.invalid) {
      alert('Please Fill All Fields');
      return;
    }

    const { categoryName, categoryStatus } = this.categoryForm.value;

    this.mainService.addCategory({
      _id: Math.random() + 1,
      categoryName,
      categoryStatus: categoryStatus === 'Active',
    });

    this.categoryForm.reset();
  }

  onSearch(query: string) {
    this.filteredCategories = this.categories.filter((category) =>
      category.categoryName.toLowerCase().includes(query.toLowerCase())
    );
  }
}
