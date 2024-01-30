import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.GetProduct();
  }

  
  ProductsDetails: any;

  GetProduct() {
    this.service.GetProducts().subscribe(items => {
      this.ProductsDetails = items;
      console.log(this.ProductsDetails);
    });
  }
}
