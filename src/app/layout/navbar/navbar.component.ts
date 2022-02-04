import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  addedProducts:Product[]=[];
  drop=false;
  cartTotal:number=0;
  // productService = ne w ProductService();

  constructor(private productService:ProductService) {
  }
  ngOnInit(): void {
      this.productService.carHasChanged.subscribe(
        (res)=>{
          this.addedProducts=res;
          console.log(this.productService.cartTotal);
          
          this.cartTotal = this.productService.cartTotal
        },
        (err)=>{},
        ()=>{}
      )
    
  }
  
  // totalPrice(product:Product){
  //  this.totalPrice=this.productService.totalPrice(product)
  
  // }
  deleteItem(product:Product){
    this.productService.deleteProduct(product)
  }


  
   

}

