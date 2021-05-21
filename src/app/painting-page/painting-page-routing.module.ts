import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingPageComponent } from './painting-page.component';

const routes: Routes = [{ path: ':id', component: PaintingPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaintingPageRoutingModule { }
