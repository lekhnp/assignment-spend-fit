import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {

  constructor() { }

  public mainMenuExpended = new BehaviorSubject(true);
  expandMainMenu(data: boolean) {
    this.mainMenuExpended.next(data);
  }
}
