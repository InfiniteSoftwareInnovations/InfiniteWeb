import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { BlogNewsComponent } from './views/blog-news/blog-news.component';
import { ContactComponent } from './views/contact/contact.component';
import { PoliciesComponent } from './views/policies/policies.component';
import { ProductsServicesComponent } from './views/products-services/products-services.component';
import { PromotionsComponent } from './views/promotions/promotions.component';

const routes: Routes = [  
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a /home por defecto
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'blog', component: BlogNewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'product', component: ProductsServicesComponent },
  { path: 'promotion', component: PromotionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
