import { Component } from "@angular/core";
import { MockItemModel } from "./mock-item.model";
import { mock_list_item } from "./mock_list_item";


@Component({
    selector: 'cs-watchhistory-layout',
    templateUrl: 'watchhistory-layout.component.html',
    styleUrls: ['watchhistory-layout.component.css']
})
export class WatchHistoryLayoutComponent{
    shows: MockItemModel []=[];
    constructor(){
      for(var show of mock_list_item){
        console.log(show);
        this.shows.push(show);
  
      }
    }
  

}