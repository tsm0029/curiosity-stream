import { Component } from '@angular/core';
import { MockItemModel } from './mock-item.model';
import { mock_list_item } from './mock_list_item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curiosity-stream';
  shows: MockItemModel []=[];
  constructor(){
    for(var show of mock_list_item){
      console.log(show);
      this.shows.push(show);

    }
  }
}