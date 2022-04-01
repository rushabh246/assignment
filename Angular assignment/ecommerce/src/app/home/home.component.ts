import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { Items } from '../shared/models/item';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:any[]=[];
  route: any;
  constructor(private is:ItemService, private router:ActivatedRoute) { }

  ngOnInit(): void {
this.router.params.subscribe(params =>{
if(params['searchItem'])
this.items=this.is.getAll().filter(item =>item.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
else if(params['tag'])
this.items = this.is.getAllItemByTag(params['tag'])
else
this.items=this.is.getAll();
})
    
  }
 
}
