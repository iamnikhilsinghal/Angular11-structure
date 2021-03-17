import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private userService: UserListService
  ) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((resp) => {
      console.log('resp', resp);
    });
  }

  logout() {
    this.authService.logout();
  }
}
