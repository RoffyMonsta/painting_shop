
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { PaintingPageComponent } from './painting-page/painting-page.component';

export const routes: Routes = [
  { path: '', component: MainSectionComponent},
  { path: 'list', loadChildren: () => import('./list-of-products/list-of-products.module').then(m => m.ListOfProductsModule)},
  { path: 'painting', loadChildren: () => import('./painting-page/painting-page.module').then(m => m.PaintingPageModule)},
  { path: 'basket', loadChildren: () => import('./basket-page/basket-page.module').then(m => m.BasketPageModule)},
  { path: 'about', loadChildren: () => import('./about-us-page/about-us-page.module').then(m => m.AboutUsPageModule) },
  { path: 'careers', loadChildren: () => import('./careers/careers.module').then(m => m.CareersModule) },
  { path: 'blog', loadChildren: () => import('./blog-page/blog-page.module').then(m => m.BlogPageModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
