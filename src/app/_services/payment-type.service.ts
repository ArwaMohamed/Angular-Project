import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PaymentType } from '../_models/product/payment_type.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentTypeService {

  paymentType:PaymentType[]=[
    {id:1,name:'COD'},
    {id:2,name:'Paypal'},
    {id:3,name:'Credit Card '},
    {id:4,name:'Depit Card'},
    {id:5,name:'Cash'},
    {id:6,name:'Visa'},
    {id:7,name:'Master Card'},
    {id:8,name:'Amirican Express'},
    {id:9,name:'Mobile Payments'},
  ]
  constructor() { }
  getAllPaymentType(){
    return this.paymentType
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}


}
