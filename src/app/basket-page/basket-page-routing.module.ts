import { BasketPageComponent } from './basket-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaintingPageComponent } from '../painting-page/painting-page.component';

const routes: Routes = [{ path: '', component: BasketPageComponent },
{ path: 'painting', component: PaintingPageComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketPageRoutingModule { }
