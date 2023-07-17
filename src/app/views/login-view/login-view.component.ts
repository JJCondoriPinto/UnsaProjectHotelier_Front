import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/api/auth/login.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  error !: string

  formData : FormGroup = new FormGroup({
    username: new FormControl('',
    [Validators.required]),
    password: new FormControl('',
    [Validators.required, Validators.minLength(8)])
  })

  constructor(private service : LoginService) { }

  login() {
    if (!this.formData.invalid) {

      this.service.login(this.formData.value as User);

    } else {

      const err1 = this.formData.get('username')?.errors;
      const err2 = this.formData.get('password')?.errors;

      if (err1?.['required']) {
        this.error = 'Debe proporcionar un usuario';
      } else if (err2?.['required']) {
        this.error = 'Debe proporcionar una contraseña';
      } else if (err2?.['minlength']) {
        this.error = 'Contraseña invalida, minimo 8 caracteres';
      }

    }

    return false;
  }
}
