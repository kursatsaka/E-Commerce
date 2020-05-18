import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { MatTableModule } from '@angular/material/table';
import { CustomerService } from '../services/customer.service';

@NgModule({
  imports: [
    CommonModule, MatTableModule
  ],
  declarations: [CustomerComponent],
  entryComponents: [CustomerComponent],
  providers: [CustomerService]
})
export class CustomerModule {
  static dynamicComponentsMap = {
    CustomerComponent,
  };
 }
