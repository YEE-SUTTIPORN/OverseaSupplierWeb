import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet, NgIf, AsyncPipe],
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {
  isFavorited = false;
  isLoggedIn$!: Observable<boolean>;


  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$();
    console.log(this.isLoggedIn$)
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  toggleFavorite() {
    this.isFavorited = !this.isFavorited;
  }
}
