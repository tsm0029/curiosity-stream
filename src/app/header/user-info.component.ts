import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { UserInfo } from "./user-info.model";

@Injectable()
@Component({
    selector: "cs-userinfo",
    templateUrl: "user-info.component.html"
})
export class UserInfoComponent implements OnInit{
    myInfo: UserInfo | undefined;
    constructor(private http:HttpClient){

    }
    ngOnInit(): void {
        console.log("sending get request to server");
        this.getUserInfo();
        console.log("registering showuserinfo as a subscriber");
        this.showUserInfo();
    }
    getUserInfo(){
        return this.http.get<UserInfo>('https://curiosity-stream-b4f86-default-rtdb.firebaseio.com/my-info.json');
    }
    showUserInfo(){
        this.getUserInfo().subscribe((data: UserInfo) => {
            console.log(data);
            this.myInfo = data;
        })
    }

}