import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { carouselComponent } from './carousel/carousel.component';
import { videocardComponent } from './videocard/videocard.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    carouselComponent,
    videocardComponent
  ],

  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
