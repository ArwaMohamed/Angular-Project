import { catgory } from './category.model';
import { PaymentType } from './payment_type.model';
import { product_lang } from './product_lang.model';
import {Supplier} from './supplier.model'
import { tags } from './tags.model';
 
export interface Product{
    id?:number;
    data:product_lang[];
    price:number;
    discount?:number;
    imageUrl?:string;
    supplier?:Supplier;
    amount?:number;
    catgory:catgory;
    tags:tags[];
    paymentType:PaymentType[];
}