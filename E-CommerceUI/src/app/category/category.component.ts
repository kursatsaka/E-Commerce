import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { Category } from '../models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  title = 'Kategoriler';
  categories: Category[];
  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Category>(this.categories);

  ngOnInit() {

    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      this.dataSource = new MatTableDataSource<Category>(data);
    });
  }

}
