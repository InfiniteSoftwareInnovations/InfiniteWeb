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
import { HeaderComponent } from './components/header/header.component';
import { ParticulasComponent } from './components/particulas/particulas.component';
import { FondoComponent } from './components/fondo/fondo.component';  
import { GRID_EVENTS } from 'grid';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsServicesComponent,
    BlogNewsComponent,
    ContactComponent,
    PromotionsComponent,
    PoliciesComponent,
    HeaderComponent,
    ParticulasComponent,
    FondoComponent,
    FooterComponent
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
