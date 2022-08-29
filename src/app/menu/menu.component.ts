import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { AuthService } from '../logger/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  readonly darkModeSwitch = new EventEmitter<boolean>();

  public songbookName = "Głos Pana";
  public isDark = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  isLogin(): boolean {
    return this.authService.isLoginUser();
  }

  onDarkModeSwitch({ checked }: MatSlideToggleChange) {
    this.isDark = checked;
    this.darkModeSwitch.emit(checked);
  }

  public logoutUser() {
    this.authService.logout().subscribe();
    this.authService.accessToken = '';
    this.authService.username = '';
    this.router.navigate(['logout']);
  }

  goToLogin(): void {
    this.router.navigate(['login']);
  }
  
  goToSongbook(): void {
    this.router.navigate(['songbook']);
  }

}
