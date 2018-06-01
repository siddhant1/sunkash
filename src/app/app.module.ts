import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { CarouselBarComponent } from './components/carousel-bar/carousel-bar.component';
import { PopularStoresComponent } from './components/popular-stores/popular-stores.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MiddleBarComponent,
    CarouselBarComponent,
    PopularStoresComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
