import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  itemPageTags?:string[];
  @Input()
  justifyContent:string = 'center';
  
  tags?:Tag[] = [];
  constructor(private is:ItemService) { }

  ngOnInit(): void {
    if(!this.itemPageTags)
    this.tags = this.is.getAllTag();
  }

}
