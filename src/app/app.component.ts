import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Songbook-frontend';

  private isDark = true;

  @HostBinding('class')
  get themeMode() {
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  switchMode(isDarkMode: boolean) {
    this.isDark = isDarkMode;
    console.log("is Dark = " + this.isDark);

  }
}
