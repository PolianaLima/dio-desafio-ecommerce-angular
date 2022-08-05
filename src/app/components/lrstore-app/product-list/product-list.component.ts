import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  _product:Product[]= [];


  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this._product = this.productService.retrieveAll();
    console.log(this._product)
  }


}
