import { Component, Input,EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

constructor(private productService:ProductService) { }
//from parent to child
  @Input()
  productItem!:Product;

  //from child to parent 
  @Output()
  itemAddToCart : EventEmitter<Product> =  new EventEmitter<Product>();
  
  // productService = new ProductService()

  calculatePrice(): number{
    let price;
    if(this.productItem.discount) 
      return price = this.productItem.price-(this.productItem.price * this.productItem.discount/100);
    return price = this.productItem.price;
  }
   
  onItemAddToCart( ){
    console.log(this.productItem); 
    
    this.productService.addProducttoCart(this.productItem)
  }
  deleteProduct(productItem:Product){
    this.productService.onlistItemRemove(productItem);
}
  ngOnInit(): void {
  }

}
