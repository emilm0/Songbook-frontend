import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

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

    this.authService.login(this.setFormControlIfNull(this.emailFormControl),
                           this.setFormControlIfNull(this.passwordFormControl));

    console.log(this.setFormControlIfNull(this.emailFormControl),
                this.setFormControlIfNull(this.passwordFormControl))
    
  }
  private setFormControlIfNull(formControl: FormControl): string {
    return formControl ? formControl.value : '';
  }
}
