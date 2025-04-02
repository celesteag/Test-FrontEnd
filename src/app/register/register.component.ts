import { Component, signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  email = signal('');
  password = signal('');
  message: string = '';

  constructor(private authService: AuthService, private router: Router){}

  register(): void {

    this.authService.register(this.email(), this.password()).subscribe(
      () => {
        this.message = "Usuario registrado";
        this.router.navigate(['/login']);
      },
      (error) => {
        this.message = "Error: " + error.error.message;
      }
    );



    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email())) {
        this.message = 'Error: El email no es válido';
        return;
    }

    if (this.password().length < 8) {
      this.message ='Error: La contraseña debe tener al menos 8 caracteres';
        return;
    }
    if (!/[A-Z]/.test(this.password())) {
        this.message ='Error: La contraseña debe contener al menos una letra mayúscula';
        return;
    }
    if (!/[a-z]/.test(this.password())) {
        this.message ='Error: La contraseña debe contener al menos una letra minúscula';
        return;
    }
    if (!/[0-9]/.test(this.password())) {
        this.message ='Error: La contraseña debe contener al menos un número';
        return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.password())) {
        this.message = 'Error: La contraseña debe contener al menos un carácter especial';
        return;
    }


    this.message = 'Usuario registrado exitosamente';
  }

}
