import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
@Injectable({
  providedIn:'root'
})

export class AuthenticationService {

  constructor(private angularFireAuth: AngularFireAuth , private router:Router) {
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
        this.router.navigate(['/register']);
      });
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        localStorage.setItem('token','true');
        console.log('You are in !');
        this.router.navigate(['/']);
})
      .catch(err => {
        console.log('Something went wrong:', err.message);
        this.router.navigate(['/login']);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .signOut().then(() =>{
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },err =>{
       alert(err.message);
      });
  }
}
