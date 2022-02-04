import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path : '',component: ProductListingComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'product' , children:[
 {path:'listing',component:ProductListingComponent},
  {path:'details/:id',component:ProductDetailsComponent},
  {path:'add',component:ProductFormComponent} ,
  {path:'edit/:id',component:ProductFormComponent} ,
  ]},
  {path:'login',component:UserComponent},

  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
