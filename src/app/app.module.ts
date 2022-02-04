import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductFilterComponent } from './core/product-feature/product-filter/product-filter.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TestComponent } from './test/test.component';
import { ProductDetailsComponent } from './core/product-feature/product-details/product-details.component';
import { ProductFormComponent } from './core/product-feature/product-form/product-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductService } from './_services/product.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListingComponent,
    ProductFilterComponent,
    FooterComponent,
    TestComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    PageNotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
