import { Router } from '@angular/router';
import { Category } from './../../model/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-catrgory',
  templateUrl: './search-catrgory.component.html',
  styleUrls: ['./search-catrgory.component.css']
})
export class SearchCatrgoryComponent implements OnInit {
   category: Category;
   categoryList: Category [];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  deleteCatogory(): void {
    console.log('category is deleted : ', this.category);
  }

  addCatogory(): void{
    console.log('go to add category');
    this.router.navigate(['/addcategory']);

  }

}
