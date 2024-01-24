import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../CategoryInterface';
import { MainService } from './../../services/main.service';
import { CategoryModalComponent } from 'src/app/modal/category-modal/category-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css'],
})
export class CategorylistComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category = {} as Category;

  constructor(
    private mainService: MainService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = this.mainService.getCategories();
    console.log('CAtegories', this.categories);
  }

  onAddCategory() {
    this.router.navigate(['/categories/addcategory']);
  }

  onDeleteCategory(categoryId: number) {
    this.mainService.deleteCategory(categoryId);
  }

  getStatusClass(categoryStatus: boolean): string {
    return categoryStatus ? 'active-status' : 'not-active-status';
  }

  editCategory(category: Category) {
    const modalRef = this.modalService.open(CategoryModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.category = { ...category };

    modalRef.componentInstance.categoryUpdated.subscribe(
      (updatedCategory: Category) => {
        const index = this.categories.findIndex(
          (c) => c._id === updatedCategory._id
        );
        if (index !== -1) {
          this.categories[index] = updatedCategory;
        }
      }
    );
  }
}
