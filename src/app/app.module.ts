import { BlogState } from './shared/state/blog.state';
import { ReviewsState } from './shared/state/reviews.state';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PaintingComponent } from './shared/components/painting/painting.component';
import { UserReviewComponent } from './user-review/user-review.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListOfNamesPipe } from './shared/pipes/list-of-names.pipe';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import { CategoryState } from './shared/state/category.state';
import { BasketState } from './shared/state/basket.state';
import { PaintingsState } from './shared/state/paintings.state';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {MatChipsModule} from '@angular/material/chips';
import { CopyrightComponent } from './footer/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    HeaderMenuComponent,
    LeftMenuComponent,
    MainSectionComponent,
    FooterComponent,
    RecipesComponent,
    UserReviewComponent,
    CopyrightComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatListModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    HttpClientModule,
    MatSidenavModule,
    SharedModule,
    NgxsModule.forRoot([
      BasketState,
      CategoryState,
      ReviewsState,
      PaintingsState,
      BlogState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    RouterModule.forRoot([]),
    IvyCarouselModule,
    MatChipsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
