import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ProductsServicesComponent } from './views/products-services/products-services.component';
import { BlogNewsComponent } from './views/blog-news/blog-news.component';
import { ContactComponent } from './views/contact/contact.component';
import { PromotionsComponent } from './views/promotions/promotions.component';
import { PoliciesComponent } from './views/policies/policies.component';
import { CardModule } from 'primeng/card';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsServicesComponent,
    BlogNewsComponent,
    ContactComponent,
    PromotionsComponent,
    PoliciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    GalleriaModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
