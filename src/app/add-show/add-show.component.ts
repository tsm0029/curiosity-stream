import { Component, OnInit } from '@angular/core';
import { MockItemModel } from '../mock-item.model';

@Component({
  selector: 'cs-AddShow',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addShow(show:MockItemModel){
    console.log("you clicked add show")
    console.log(show)
  }

}
