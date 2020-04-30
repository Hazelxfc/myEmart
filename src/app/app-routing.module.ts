import { ManagementNavComponent } from './management/management-nav/management-nav.component';
import { BlockItemComponent } from './management/block-item/block-item.component';
import { BlockUserComponent } from './management/block-user/block-user.component';
import { AddDiscountComponent } from './management/add-discount/add-discount.component';
import { SearchCatrgoryComponent } from './management/search-catrgory/search-catrgory.component';
import { AddCategoryComponent } from './management/add-category/add-category.component';
import { AddItemComponent } from './management/add-item/add-item.component';
import { ShowDiscountComponent } from './management/show-discount/show-discount.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CartComponent } from './cart/cart.component';
import { PurhistoryComponent } from './purhistory/purhistory.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component : SignupComponent },
  { path: 'login', component : LoginComponent },
  { path: 'itemlist', component : ItemsListComponent },
  { path: 'history', component : PurhistoryComponent },
  { path: 'cart', component : CartComponent },
  { path: 'detail/:id', component  : ItemDetailComponent},
  { path: 'category', component  : SearchCatrgoryComponent },
  { path: 'additem', component : AddItemComponent },
  { path: 'blockuser', component : BlockUserComponent },
  { path: 'blockItem', component : BlockItemComponent },
  { path: 'addcategory', component  : AddCategoryComponent },
  { path: 'searchcategory', component  : SearchCatrgoryComponent },
  { path: 'adddiscount', component  : AddDiscountComponent },
  { path: 'showdiscount', component  : ShowDiscountComponent },
  { path: 'adminlanding', component : ManagementNavComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
