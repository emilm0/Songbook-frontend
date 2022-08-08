import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { AuthService } from '../auth.service';
import { LoginRequest } from '../Requests/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', Validators.required);

  constructor( private authService: AuthService, private router: Router ) {   }

  ngOnInit(): void {
  }

  login(): void {
    var loginRequest = new LoginRequest();
    loginRequest.email = this.setFormControlIfNull(this.emailFormControl)
    loginRequest.password = this.setFormControlIfNull(this.passwordFormControl)
    
    this.authService.login(loginRequest).subscribe(() =>
      this.router.navigate(['welcome'])
    );

  }

  private setFormControlIfNull(formControl: FormControl): string {
    return formControl ? formControl.value : '';
  }
}
