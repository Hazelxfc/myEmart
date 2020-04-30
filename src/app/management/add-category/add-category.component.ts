import { Category } from './../../model/category';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  title = 'Add category';
  category: Category;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveCategory(): void{
    this.router.navigate(['/addcategory']);
  }

}
