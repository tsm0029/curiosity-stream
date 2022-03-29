import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { CollectionsComponent } from './collections-layout.component';
import { homeLayoutComponent } from './home-layout.component';
import { KeepWatchingLayoutComponent } from './keepWatching-layout.component';
import { WatchListLayoutComponent } from './watchlist-layout.component';
import { WatchHistoryLayoutComponent } from './watchhistory-layout.component';
import { AddShowComponent } from './add-show/add-show.component';

const routes:Routes = [
  {path:'', component:homeLayoutComponent},
  {path:'admin',component: AddShowComponent},
  {path: 'collections-layout', component: CollectionsComponent},
  {path: 'home', component:homeLayoutComponent},
  {path: 'keepWatching', component:KeepWatchingLayoutComponent},
  {path: 'watchlist', component:WatchListLayoutComponent},
  {path: 'watchhistory', component: WatchHistoryLayoutComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule

  ]
})
export class AppRoutingModule { }
