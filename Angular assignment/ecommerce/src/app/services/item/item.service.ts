import { Injectable } from '@angular/core';
import { Items } from 'src/app/shared/models/item';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }
  getItemById(id:number) : Items{
    return this.getAll().find(item => item.id == id)!;

  }
  getAllItemByTag(tag: string): Items[] {
    return tag == 'All' ?

      this.getAll() : this.getAll().filter(item => item.tags?.includes(tag));

  }
getAllTag():Tag[]{
  return[
  {name: 'All', count:8},
  {name: 'laptop', count:2},
  {name: 'tablet', count:2},
  {name: 'smartphone', count:4}
  ]
}
  getAll(): Items[] {
    return [
      {
        id: 1,
        price: 109999,
        name: 'Samsung Galaxy S22',
        favorite: true,
        tags: ['smartphone', 'SAMOLED display'],
        imageUrl: '/assets/item-1.png',
        origin: ['Made in Korea'],
      },
      {
        id: 2,
        price: 59961,
        name: 'Lenovo ideapad Gaming 3',
        favorite: true,
        tags: ['laptop', 'gaming'],
        imageUrl: '/assets/item-2.png',
        origin: ['Made in China'],
      },
      {
        id: 3,
        price: 29000,
        name: 'Samsung Galaxy Tab A8',
        favorite: true,
        tags: ['tablet', '4G', 'android'],
        imageUrl: '/assets/item-3.png',
        origin: ['Made in Korea'],
      },
      {
        id: 4,
        price: 79999,
        name: 'Apple iphone 13',
        favorite: true,
        tags: ['smartphone'],
        imageUrl: '/assets/item-4.png',
        origin: ['Made in US'],
      },
      {
        id: 5,
        price: 28000,
        name: 'Lenovo ideapad s145',
        favorite: true,
        tags: ['laptop', '15.6 inch'],
        imageUrl: '/assets/item-5.png',
        origin: ['Made in China'],
      },
      {
        id: 6,
        price: 15999,
        name: 'Realme Pad',
        favorite: true,
        tags: ['tablet', 'Android 11'],
        imageUrl: '/assets/item-6.png',
        origin: ['Made in China'],
      },
      {
        id: 7,
        price: 30000,
        name: 'OnePlus Nord CE 2 5G',
        favorite: true,
        tags: ['smartphone', '5g'],
        imageUrl: '/assets/item-7.png',
        origin: ['Made in China'],
      },
      {
        id: 8,
        price: 13999,
        name: 'MOTOROLA G31',
        favorite: true,
        tags: ['smartphone', '128gb', '6gb'],
        imageUrl: '/assets/item-8.png',
        origin: ['Made in US'],
      }
    ];
  }
}
