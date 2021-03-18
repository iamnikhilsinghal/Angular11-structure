import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private userService: UserListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getUserInfo().subscribe((resp) => {
      localStorage.setItem('user', JSON.stringify(resp));
      this.authService.userUpdated.next(resp);
    });
  }

  about() {
    this.router.navigate(['dashboard', 'about']);
  }
  logout() {
    this.authService.logout();
  }
}
