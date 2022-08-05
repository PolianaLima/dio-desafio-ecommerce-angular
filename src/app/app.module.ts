import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { LrstoreAppComponent } from './components/lrstore-app/lrstore-app.component';
import { FiltersComponent } from './components/lrstore-app/filters/filters.component';
import { ProductListComponent } from './components/lrstore-app/product-list/product-list.component';
import { ProductItemComponent } from './components/lrstore-app/product-list/product-item/product-item.component';
import { FilterCategoryComponent } from './components/lrstore-app/filters/filter-category/filter-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LrstoreAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent,
    FilterCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
