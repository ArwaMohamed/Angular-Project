import { Injectable } from '@angular/core';
import { catgory } from '../_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 category :catgory[]=[
    {id:1,name:"food"},
    {id:2,name:"electronics"},
    {id:3,name:"clothes"},
    {id:4,name:"books"},
    {id:5,name:"toys"},
    {id:6,name:"skin care"},
    {id:7,name:"baby"},
    {id:8,name:"sports"},
    {id:9,name:"makeup"},
    {id:10,name:"home"},
    {id:11,name:"health"},
    {id:12,name:"furniture"}
  ]
  constructor() { }

  getAllCategory(){
    return this.category
  }
  getById(){}
  add(){}
  edit(){}
  delete(){}
}
