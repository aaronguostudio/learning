import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Item } from './models/item';
import { ITEMS } from './mock/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems(): Observable<Item[]> {
    return of(ITEMS);
  }
}
