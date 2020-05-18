import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/Customer';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  title = 'Müşteriler';
  customers: Customer[];
  displayedColumns: string[] = ['id', 'fullName'];
  dataSource = new MatTableDataSource<Customer>(this.customers);

  ngOnInit() {

    this.customerService.getCustomers().subscribe(data => {
      this.customers = data;
      this.dataSource = new MatTableDataSource<Customer>(data);
    });
  }
}
