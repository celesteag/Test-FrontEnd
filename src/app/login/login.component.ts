import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = signal('');
  password = signal('');
  errorMsg: string = '';

  saveDatos() {
  this.errorMsg = '';

    const email = this.email();
    const password = this.password();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        this.errorMsg = 'Error: El email no es válido';
        return;
    }

    if (password.length < 8) {
      this.errorMsg ='Error: La contraseña debe tener al menos 8 caracteres';
        return;
    }
    if (!/[A-Z]/.test(password)) {
        this.errorMsg ='Error: La contraseña debe contener al menos una letra mayúscula';
        return;
    }
    if (!/[a-z]/.test(password)) {
        this.errorMsg ='Error: La contraseña debe contener al menos una letra minúscula';
        return;
    }
    if (!/[0-9]/.test(password)) {
        this.errorMsg ='Error: La contraseña debe contener al menos un número';
        return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        this.errorMsg = 'Error: La contraseña debe contener al menos un carácter especial';
        return;
    }


    this.errorMsg = 'Usuario registrado exitosamente';
  }
}
