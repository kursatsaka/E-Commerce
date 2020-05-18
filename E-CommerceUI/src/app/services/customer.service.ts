import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../models/Customer';
import { environment } from 'src/environments/environment';


@Injectable()

export class CustomerService {

  constructor(public http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(environment.apiUrl + 'Customer');
  }
}
