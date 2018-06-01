import { PopularStoresComponent } from './components/popular-stores/popular-stores.component';
import { CarouselBarComponent } from './components/carousel-bar/carousel-bar.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
