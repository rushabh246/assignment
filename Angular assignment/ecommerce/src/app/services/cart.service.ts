import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Items } from '../shared/models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:Items[]=[]
private cart: Cart = new Cart();
  addToCart(item:Items) : void{
    let cartItem = this.cart.citems.find(citem => citem.item.id === item.id)
    localStorage.setItem('products',JSON.stringify(this.items))
    if(cartItem){
      this.changeQuantity(item.id , cartItem.quantity +1)
      return;
    }
    this.cart.citems.push(new CartItem(item));
  }
  removeFromCart(itemId:number):void{
    this.cart.citems = this.cart.citems.filter(citem => citem.item.id !=itemId)
  }
  changeQuantity(quantity:number, itemId:number){
    let cartItem = this.cart.citems.find(citem => citem.item.id === itemId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
   return this.cart
  }
  }
