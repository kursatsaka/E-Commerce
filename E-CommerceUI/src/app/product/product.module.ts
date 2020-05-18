import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  declarations: [ProductComponent, ProductFilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([]),
  ],
  entryComponents: [ProductComponent],
})
export class ProductModule {
  static dynamicComponentsMap = {
    ProductComponent,
  };
}
