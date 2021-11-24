import {Component, OnInit} from '@angular/core';
import {products} from "../../data/products";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  title: string = "Hello world Eugene!";
  products = products;

  constructor() {
  }

  ngOnInit(): void {
  }

}
