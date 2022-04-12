import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'cs-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log("button clicked");
    console.log(data);
    data.reset();

    this.auth.signUp(data.value.email,data.value.password).subscribe(
      data => {
        console.log(data);

      },
      error => {
        console.log(error);

      }
    )
    data.reset();
  }

}
