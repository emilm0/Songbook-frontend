import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginRequest } from '../Requests/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  constructor( private authService: AuthService ) {   }

  ngOnInit(): void {
  }

  userLogin(): void {
    var loginRequest = new LoginRequest();
    loginRequest.email = this.setFormControlIfNull(this.emailFormControl)
    loginRequest.password = this.setFormControlIfNull(this.passwordFormControl)
    
    this.authService.login(loginRequest);
  }

  getUsers() {
    this.authService.getUsers();
  }

  private setFormControlIfNull(formControl: FormControl): string {
    return formControl ? formControl.value : '';
  }
}
