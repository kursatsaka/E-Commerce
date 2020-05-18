import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable()
export class ProductService {
  constructor(public http: HttpClient) {}
  path = environment.apiUrl + 'Product';

  getProducts(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>(categoryId ? this.path + '?categoryId=' + categoryId : this.path);
  }
}
