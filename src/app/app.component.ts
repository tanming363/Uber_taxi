import { Component } from '@angular/core';
import { UserService } from "./shared/user.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uber-taxi';
  router: any;

  constructor(public userService: UserService) { }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/sign-in']);
  }
}

