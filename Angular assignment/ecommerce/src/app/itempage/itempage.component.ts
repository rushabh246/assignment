import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item/item.service';
import { Items } from '../shared/models/item';

@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
export class ItempageComponent implements OnInit {
item!: Items;
  constructor(private activatedRoute:ActivatedRoute,
    private itemservice:ItemService, private cartservice:CartService, private router:Router) {
      activatedRoute.params.subscribe((params) =>{
        if(params['id'])
        this.item = itemservice.getItemById(params['id'])
      })
     }

  ngOnInit(): void {
  }
addToCart(){
  this.cartservice.addToCart(this.item);
  this.router.navigateByUrl('/cart-page')
}
}
