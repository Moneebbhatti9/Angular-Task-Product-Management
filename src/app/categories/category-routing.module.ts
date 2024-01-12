import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { CategorylistComponent } from './categorylist/categorylist.component';

const routes: Routes = [
  {
    path: 'addcategory',
    component: CategoriesComponent,
  },
  {
    path: 'categorylist',
    component: CategorylistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
