import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ItempageComponent } from './itempage/itempage.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchItem', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'item/:id', component: ItempageComponent },
  { path: 'cart-page', component: CartPageComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'checkout', component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
