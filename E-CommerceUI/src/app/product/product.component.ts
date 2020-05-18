import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) {}

  title = 'Ürün Listesi';
  filterText = '';
  products: Product[];

  ngOnInit() {
    this.activatedRoute.params.subscribe((x) => {
      this.productService.getProducts(x.categoryId).subscribe((data) => {
        this.products = data;
      });
    });
  }

  addtoCart(product) {
    this.messageService.success(product.name + ' sepete eklendi');
  }
}
