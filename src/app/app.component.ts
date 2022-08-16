import { AccountService } from './services/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private accountService: AccountService) { }
  title = 'shop';

  isLoggedin() {
    return this.accountService.isLogedIn();
  }
  logOut() {
    this.accountService.logOut();
  }
}
