import { Component } from "@angular/core";
import { MockItemModel } from "./mock-item.model";
import { mock_list_item } from "./mock_list_item";


@Component({
    selector: 'cs-watchlist-layout',
    templateUrl: 'watchlist-layout.component.html',
    styleUrls: ['watchlist-layout.component.css']
})
export class WatchListLayoutComponent{
    shows: MockItemModel []=[];
    constructor(){
      for(var show of mock_list_item){
        console.log(show);
        this.shows.push(show);
  
      }
    }
  

}