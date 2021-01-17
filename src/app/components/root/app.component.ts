import { Component } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private exchangeData: ExchangeDataService
  ) {
  }

  isMainMenuOpen = true;
  mainMenuExpanded = true;

  ngOnInit() {
    this.initMainMenuExpansion();    
  }

  initMainMenuExpansion() {
    this.exchangeData.mainMenuExpended.subscribe(data => {
      this.mainMenuExpanded = data;
    });
  }
}
