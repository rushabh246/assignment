import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   email!: string;
  password!: string;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  signIn() {
   if(this.email ==''){
   alert("Please enter email");
   return;
   }
   if(this.password ==''){
    alert("Please enter password");
    return;
    }
    console.log("Welcome!");
    this.authenticationService.SignIn(this.email,this.password);
    this.email = '';
    this.password = '';
    
}
}