import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/categories/CategoryInterface';

@Component({
  selector: 'app-category-modal',
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css'],
})
export class CategoryModalComponent implements OnInit {
  @Input() category: Category = {} as Category;
  @Output() categoryUpdated = new EventEmitter<Category>();
  categoryForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.categoryForm = this.fb.group({
      categoryName: [this.category.categoryName, Validators.required],
      categoryStatus: [
        this.category.categoryStatus ? 'Active' : 'Not Active',
        Validators.required,
      ],
    });
  }

  onSaveChanges() {
    const updatedCategory: Category = {
      ...this.category,
      categoryName: this.categoryForm.value.categoryName,
      categoryStatus: this.categoryForm.value.categoryStatus === 'Active',
    };

    this.categoryUpdated.emit(updatedCategory);

    this.activeModal.close('Save changes click');
  }
}
