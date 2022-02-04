import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import {Product} from 'src/app/_models/product/product.model'
import { ProductService } from 'src/app/_services/product.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})

export class ProductListingComponent implements OnInit {
//from item-listing to app compomemt
@Output()
sendItemToCard : EventEmitter<Product> = new EventEmitter<Product>();
 
  totalLength :any;
  page : number = 10;
  productsArray : Product[]=[] ;
  // productService = new ProductService();
  
  constructor(private productService:ProductService) { 
    this.productsArray = productService.getAllProduct();
  } 



// onItemAddToCard(product:Product){
//   this.productService.addProducttoCart(product)
// }
  ngOnInit(): void {
      this.productsArray=this.productService.getAllProduct();
  }

  newArray:any
  searchThis(data:any) {
    this.productsArray = this.newArray
    console.log(data)
    if (data) {
      this.productsArray = this.productsArray.filter((ele) => {
          let arrayelement = ele.data[0].name;
          console.log(arrayelement.includes(data));
          return arrayelement.includes(data);
        })
    }
    else {
      console.log(this.productsArray)
    }
    console.log(this.productsArray)
  }
}


 