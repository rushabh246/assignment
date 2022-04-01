import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;
  

  constructor( private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }
  
  signUp() {if(this.email ==''){
    alert("Please enter email");
    return;
    }
    if(this.password ==''){
     alert("Please enter password");
     return;
     }
     console.log("You are registered successfully");
     this.authenticationService.SignUp(this.email,this.password);
     this.email = '';
     this.password = '';
     
  }

}
