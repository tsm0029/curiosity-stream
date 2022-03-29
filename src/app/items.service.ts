import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MockItemModel } from "./mock-item.model";



@Injectable(
    {providedIn: 'root'}
)
export class ItemsService{
    private baseUrl:string = "https://curiosity-stream-b4f86-default-rtdb.firebaseio.com/";
    private itemsEndPoint:string = "items.json";

    constructor(private http:HttpClient){

    }
  
    getItems(){
        return this.http.get<MockItemModel []>(this.baseUrl+this.itemsEndPoint);
    }
    getItem(index:number){
        return this.http.get<MockItemModel>(this.baseUrl + 'items' + '/' + index + '.json');
    }
    addShow(show:MockItemModel){
        // this.db.list<MockItemModel>("show").push(show);

    }
}