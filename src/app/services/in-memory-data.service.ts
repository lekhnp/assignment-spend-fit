import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menu = [
      { title: "Home", icon: "home", path: "/home", isDivider: false },
      { title: "My Card", icon: "credit_card", path: "/my-card", isDivider: false },
      { title: "Transactions", icon: "sticky_note_2", path: "/transactions", isDivider: false },
      { title: "Notifications", icon: "email", path: "/notifications", isDivider: false },
      { title: "Payments", icon: "account_balance_wallet", path: "/payments", isDivider: true },
      { title: "Departments", icon: "account_tree", path: "/departments", isDivider: false },
      { title: "Users", icon: "groups", path: "/users", isDivider: false },
      { title: "Audit Logs", icon: "text_snippet", path: "/audit-logs", isDivider: true },
      { title: "Settings", icon: "settings", path: "/settings", isDivider: false }
    ];

    return { menu };
  }
}
