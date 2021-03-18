import { Component, OnInit } from '@angular/core';
import { AuthService, User } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  user: User = { firstName: '', lastName: '' };
  subscription;

  constructor(private authService: AuthService) {
    this.subscription = this.authService.userUpdated.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit(): void {}
}
