import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/User';
import { LoginService } from 'src/app/services/api/auth/login.service';
import { StorageInfoService } from 'src/app/services/local/storage-info.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent {

  error !: string

  errorPassword : boolean = false
  errorEmail: boolean = false

  formData : FormGroup = new FormGroup({
    email: new FormControl('',
    [Validators.required]),
    password: new FormControl('',
    [Validators.required, Validators.minLength(8)])
  })

  constructor(private service : LoginService, private storage : StorageInfoService, private route : Router ) { }

  login() {
    if (!this.formData.invalid) {

      this.error = '';
      this.errorEmail = false;
      this.errorPassword= false;

      this.service.login(this.formData.value as User).subscribe({
        next: ((res : any) => {
          this.storage.setInfo(res);
          this.route.navigate(['/dashboard']);
        }),
        error: (err : any) => {
          this.error = 'Credenciales incorrectas';
          this.errorEmail = true;
          this.errorPassword= true;
         }
      });

      this.formData.reset();

    } else {

      const err1 = this.formData.get('email')?.errors;
      const err2 = this.formData.get('password')?.errors;

      this.errorEmail = err1 ? true : false
      this.errorPassword = err2 ? true : false

      if (err2?.['required'] && err1?.['required']) {
        this.error = 'Debe proporcionar unas credenciales';
      } else if (err1?.['required']) {
        this.error = 'Debe proporcionar un correo';
      } else if (err2?.['required']) {
        this.error = 'Debe proporcionar una contraseña';
      } else if (err2?.['minlength']) {
        this.error = 'Contraseña invalida, minimo 8 caracteres';
      }

    }

    return false;
  }
}
