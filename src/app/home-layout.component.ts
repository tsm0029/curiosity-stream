import { Component } from "@angular/core";
import { MockItemModel } from "./mock-item.model";
import { mock_list_item } from "./mock_list_item";


@Component({
    selector: 'cs-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class homeLayoutComponent{
    shows: MockItemModel []=[];
    constructor(){
      for(var show of mock_list_item){
        console.log(show);
        this.shows.push(show);
  
      }
    }
  

}