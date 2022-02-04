import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CheckboxRequiredValidator, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { count } from 'rxjs';
import { catgory } from 'src/app/_models/product/category.model';
import { PaymentType } from 'src/app/_models/product/payment_type.model';
import { Product } from 'src/app/_models/product/product.model';
import { tags } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductService } from 'src/app/_services/product.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-form',
  templateUrl:'./product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  paymentTyps: PaymentType[] = [];
  categoryArray:catgory[]=[];
  tags:tags[]=[]
  editMood = false;
   product = {} as Product;
   form:FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router,
    private paymentTypeServices: PaymentTypeService,
    private categoryService:CategoryService,
    private activatedRoute: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.form = fb.group({
      selectCategory:  new FormArray([])
     });
  }

  @ViewChildren('chechboxform') chechboxform!: QueryList<ElementRef>;
  ngOnInit(): void {
    console.log('params',this.activatedRoute.snapshot.params );
    console.log(this.activatedRoute.snapshot.url );
    if(this.activatedRoute.snapshot.url[0].path=='edit'){
      this.editMood = true;
    }
    if(this.editMood){
      this.getProductId()
    }
    
    this.getAllPaymentTypes()
    this.getAllCategory();
    

  }
  
  getAllPaymentTypes() {
    this.paymentTyps = this.paymentTypeServices.getAllPaymentType();
  }
  getAllCategory(){
    this.categoryArray=this.categoryService.getAllCategory()
  }
  addProduct(form: any) {
    console.log(form.value);
    const product: Product = form.value;
    this.productService.addProduct(product);
    // this.router.navigateByUrl('home')
  }
  getProductId(){
    const id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProductById(id)!;
    // console.log(this.productService.getProductById(id));
    
  }
 
  getStatus(item:any){
    let check;
      this.product.paymentType.forEach(function(e){
        if(e.name==item.name){
            check=true;
        }
      })
      console.log(check);
      
      return check
  }


  onAddProduct(form:NgForm){
    
  }


}






// checkBox(i:number){
  //   // console.log(this.paymentTyps);
  //  console.log((this.chechboxform.nativeElement as HTMLInputElement));
  // // this.chechboxform.forEach((el)=>{
  // //   // console.log(el);
  // //   const element =el.nativeElement as HTMLInputElement
  // //   console.log(element);

  // // })

  // for(let checkbox of this.chechboxform){
    // const paymentType =checkbox.nativeElement as HTMLInputElement
  //     console.log(paymentType.value);

  //   if(paymentType.checked && paymentType.name=="checkbox_"+i){

  //   }
  //  }

  // }
//   oncheckbox(index:number){
//     if(event:{ target: HTMLInputElement; }){
//      console.log(event?.target);
     
//     }
//     console.log((this.paymentTyps[index])); 
// }
// onCheckboxChange(e) {
//   const website: FormArray = this.form.get('website') as FormArray;
 
//   if (e.target.checked) {
//     website.push(new FormControl(e.target.value));
//   } else {
//      const index = website.controls.findIndex(x => x.value === e.target.value);
//      website.removeAt(index);
//   }
// }
