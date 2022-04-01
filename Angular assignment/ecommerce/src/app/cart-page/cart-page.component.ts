import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item/item.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
   cart!:Cart;
  constructor(private cartService: CartService ) {
    
    this.setCart();
   }

  ngOnInit(): void {
  }
setCart(){
  this.cart = this.cartService.getCart();
}
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.item.id);
  this.setCart();
}
changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.item.id , quantity);
  this.setCart();
}
}
