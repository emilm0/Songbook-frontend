import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  readonly darkModeSwitch = new EventEmitter<boolean>();

  public songbookName = "Głos Pana";
  public isLogin = true;
  public isDark = true;

  constructor() { }

  ngOnInit(): void {
  }

  onDarkModeSwitch({ checked }: MatSlideToggleChange) {
    this.isDark = checked;
   this.darkModeSwitch.emit(checked);
  }

  public logoutUser(): void {
    this.isLogin = !this.isLogin
  }

}
