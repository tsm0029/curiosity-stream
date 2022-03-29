import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { carouselComponent } from './carousel/carousel.component';
import { videocardComponent } from './videocard/videocard.component';
import { AppRoutingModule } from './app-routing.module';
import {CollectionsComponent} from './collections-layout.component'
import { homeLayoutComponent } from './home-layout.component';
import { KeepWatchingLayoutComponent } from './keepWatching-layout.component';
import { WatchListLayoutComponent } from './watchlist-layout.component';
import { WatchHistoryLayoutComponent } from './watchhistory-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './header/user-info.component';
import { AddShowComponent } from './add-show/add-show.component';
import { FormsModule } from '@angular/forms';
// import {AngularFireModule} from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent,
    carouselComponent,
    videocardComponent,
    CollectionsComponent,
    homeLayoutComponent,
    KeepWatchingLayoutComponent,
    WatchListLayoutComponent,
    WatchHistoryLayoutComponent,
    UserInfoComponent,
    AddShowComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
