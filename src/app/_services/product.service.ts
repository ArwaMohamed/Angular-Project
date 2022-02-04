import { Injectable, EventEmitter } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  
  //data of product
  productsArray: Product[] = [
    {
      id: 1,
      data: [{ name: 'TV', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{id:1,name:'technology'},
      price: 105500,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/300',
      amount: 0
     
    },
    {
      id: 2,
      data: [{ name: 'Camera', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{id: 2,name:'technology'},
      price: 10480,
      imageUrl: 'https://picsum.photos/200/302',
      amount: 0,
    },
    {
      id: 3,
      data: [{ name: 'Phone', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{id: 3,name:'technology'},
      price: 20000,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/303',
      amount: 0,
    },
    {
      id: 4,
      data: [{ name: 'LapTop', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{ id: 4,name:'technology'},
      price: 109500,
      imageUrl: 'https://picsum.photos/200/304',
      amount: 0,
    },
    {
      id: 5,
      data: [{ name: 'PC', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{ id: 5,name:'technology'},
      price: 1500,
      discount: 5,
      imageUrl: 'https://picsum.photos/200/305',
      amount: 0,
    },
    {
      id: 6,
      data: [{ name: 'Car', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{id: 6,name:'technology'},
      price: 56328100,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/306',
      amount: 0,
    },
    {
      id: 7,
      data: [{ name: 'PhotoCamera', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{ id: 7,name:'technology'},
      price: 105500,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/307',
      amount: 0,
    },
    {
      id: 8,
      data: [{ name: 'Tablet', discription: 'test', lang: { name: 'en' } }],
      paymentType:[{name:'cash'}],
      tags:[{name:'technology'}],
      catgory:{ id: 8,name:'technology'},
      price: 6399,
      discount: 10,
      imageUrl: 'https://picsum.photos/200/308',
      amount: 0,
    },
  ];
  cartTotal!: number;
  private filterProduct: Product[]=[];
  carHasChanged: EventEmitter<Product[]> = new EventEmitter<Product[]>();

  private cartArray: Product[] = [];

  getAllProduct(): Product[] {
    return this.productsArray;
  }
  addProduct(product: Product) {
    this.productsArray.push(product);
  }
  updateProduct() {}
  deleteProduct(product: Product) {
    let index = this.cartArray.indexOf(product);
    this.cartArray.splice(index, 1);
    this.cartTotal = 0
    this.productsArray.forEach(item => {
        this.cartTotal += (item.amount! * (item.price - item.discount!))
    })
    this.carHasChanged.emit(this.cartArray);
  }
  addProducttoCart(product: Product) {
    console.log(product);

    if (!this.cartArray.includes(product)) {
      this.cartArray.push(product);
      product.amount = 1;
      // this.totalPrice(product);

    } else {
      product.amount ? product.amount++ : product.amount;
    }
    this.cartTotal = 0
        this.cartArray.forEach(item => {
            this.cartTotal += (item.amount! * (item.price - item.discount!))
            console.log('from service',this.cartTotal);
            
        })
          
    this.carHasChanged.emit(this.cartArray);
  }


  getProductById(id:number){
    // console.log('product:',this.productsArray.find(product=>product.id==id));
    
    return this.productsArray.find(product=>product.id == id)

  }
 
  onlistItemRemove(productRemoved:Product){
    // console.log(alert(productRemoved.name))
  
  this.productsArray.splice(this.productsArray.indexOf(productRemoved),1)        
  // this.filterProduct.splice(this.filterProduct.indexOf(productRemoved),1)
  return this.productsArray

}




search(seacrhInput:string){
  this.filterProduct.splice(0,this.filterProduct.length);
  for(let item of this.productsArray){
    if(item.data[0].name.includes(seacrhInput)){
      this.filterProduct.push(item)
    }
  }
  console.log(this.filterProduct.length)
 }
 

 

 
  /**
  *  calcTotalPrice():any{
    let product !:Product
    console.log(this.cartArray.length);
    let totalprice =0;
   if(!this.cartArray.length){
     console.log(product);
      return totalprice;
   }else if(this.cartArray.length==1){
    totalprice = product.price
    return totalprice
   }else if(this.cartArray.length>1){
    totalprice +=product.price

     return totalprice=1?totalprice++:totalprice;
   }
  }
  *  */
}
