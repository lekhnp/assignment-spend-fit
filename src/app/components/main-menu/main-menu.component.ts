import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() expanded = true;

  menuData: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataService.getData('menu').subscribe((res) => {
      this.menuData = res;
    });
  }

}