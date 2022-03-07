import { Component, OnInit } from "@angular/core";
import { ItemsService } from "./items.service";
import { MockItemModel } from "./mock-item.model";



@Component({
    selector: 'cs-watchhistory-layout',
    templateUrl: 'watchhistory-layout.component.html',
    styleUrls: ['watchhistory-layout.component.css']
})
export class WatchHistoryLayoutComponent implements OnInit{
    shows: MockItemModel []=[];

    constructor(private itemService:ItemsService){
    }
  ngOnInit(): void {
    this.itemService.getItems().subscribe((data: MockItemModel []) => {
      console.log("fetching data");
      console.log(data);
      for(var item of data){
        console.log(item);
        this.shows.push(item);
      }
    });
    
  }
  

}