import { AddDiscountComponent } from './management/add-discount/add-discount.component';
import { AddCategoryComponent } from './management/add-category/add-category.component';
import { SearchCatrgoryComponent } from './management/search-catrgory/search-catrgory.component';
import { ManagementNavComponent } from './management/management-nav/management-nav.component';
import { AddItemComponent } from './management/add-item/add-item.component';
import { ShowDiscountComponent } from './management/show-discount/show-discount.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { NargateComponent } from './common/nargate/nargate.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { CommonComponent } from './common/common.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PurhistoryComponent } from './purhistory/purhistory.component';

@NgModule({
   declarations: [
      AppComponent,
      ItemsListComponent,
      ItemDetailComponent,
      CommonComponent,
      CartComponent,
      NargateComponent,
      HeaderComponent,
      LoginComponent,
      SignupComponent,
      PurhistoryComponent,
      FooterComponent,
      ShowDiscountComponent,
      AddItemComponent,
      ManagementNavComponent,
      SearchCatrgoryComponent,
      AddCategoryComponent,
      AddDiscountComponent,
      ShowDiscountComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgbModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
