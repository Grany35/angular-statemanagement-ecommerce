import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  products:ProductModel[]=[];

  constructor() {}

  ngOnInit(): void {
    this.setProducts();
  }

  setProducts() {
    for (let i = 1; i < 30; i++) {
      let product = new ProductModel();
      product.id = i;
      product.name = `Product ${i}`;
      product.unitPrice=i *10;
      product.stock=i*100;

      this.products.push(product);
    }
  }
}
