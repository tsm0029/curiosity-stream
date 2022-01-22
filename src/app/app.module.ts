import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { navbarComponent } from 'src/navigation/navbar.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    navbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
