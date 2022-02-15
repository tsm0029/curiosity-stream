import { Component } from "@angular/core";
import { MockItemModel } from "./mock-item.model";
import { mock_list_item } from "./mock_list_item";


@Component({
    selector: 'cs-keepWatching-layout',
    templateUrl: 'keepWatching-layout.component.html',
    styleUrls: ['keepWatching-layout.component.css']
})
export class KeepWatchingLayoutComponent{
    shows: MockItemModel []=[];
    constructor(){
      for(var show of mock_list_item){
        console.log(show);
        this.shows.push(show);
  
      }
    }
  

}