import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  // selectedProduct : Product[]=[]

  
  // sendItemToCard(product:Product){
  //   // if(!this.selectedProduct.includes(product)){
  //   //   this.selectedProduct.push(product)
  //   //   product.amount=1
  //   //   }else{
  //   //   product.amount?product.amount++:product.amount;
  //   //   }
  // }
}
