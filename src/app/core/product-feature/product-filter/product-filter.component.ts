import { Component, EventEmitter, OnInit, Output ,Input} from '@angular/core';
import { catgory } from 'src/app/_models/product/category.model';
import { tags } from 'src/app/_models/product/tags.model';
import { CategoryService } from 'src/app/_services/category.service';
import { ProductService } from 'src/app/_services/product.service';
import { TagsService } from 'src/app/_services/tags.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
  category!:catgory[];
  tags!:tags[];
 @Output() searchcriteria = new EventEmitter<String>();
 searchword:any
  constructor(private productService:ProductService,
    private categoriesService: CategoryService,
    private tagService: TagsService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllTags();
  }
   
  searchThis() {
    this.searchcriteria.emit(this.searchword)
}
  
getAllCategories() {
  this.category = this.categoriesService.getAllCategory();
}

// Method to display tags in the left of the page
getAllTags() {
  this.tags = this.tagService.getAlltags()
}
 
}
