import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
