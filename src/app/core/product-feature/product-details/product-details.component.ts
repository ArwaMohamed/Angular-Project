import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 relatedproduct!:Product[]
 product = {} as Product;
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.getProductId();
    this.getralatedProduct();
  }
  getProductId(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(id)!;
    // console.log(this.productService.getProductById(id));
    
  }
  onItemAddToCart( ){
    // console.log(this.product); 
    this.productService.addProducttoCart(this.product)
  }
  getralatedProduct(){
    this.relatedproduct= this.productService.getAllProduct().slice(0,4);
  }
}
