import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { MatTableModule } from '@angular/material/table';
import { CategoryService } from '../services/category.service';


@NgModule({
  imports: [CommonModule, MatTableModule],
  declarations: [CategoryComponent],
  entryComponents: [CategoryComponent],
  providers: [CategoryService]

})
export class CategoryModule {
  static dynamicComponentsMap = {
    CategoryComponent,
  };
}
