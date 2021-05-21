import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page.component';

const routes: Routes = [{ path: '', component: BlogPageComponent },
{ path: ':id', component: BlogDetailComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPageRoutingModule { }
