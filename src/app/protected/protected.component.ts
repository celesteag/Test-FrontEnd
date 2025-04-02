import { Component, signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { VehiculosComponent } from "../vehiculos/vehiculos.component";


@Component({
  selector: 'app-protected',
  imports: [VehiculosComponent],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.css'
})
export class ProtectedComponent {

    isAuthenticated = false;
    texto = signal("");

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(){
      this.authService.getToken
      this.isAuthenticated = this.authService.getToken();
      if (!this.isAuthenticated){
        this.router.navigate(['/login'])
      }

      this.authService.protected().subscribe((r) => {
        alert(this.texto.set(r.texto()));
      });
      this.router.navigate(['/vehiculos'])
    }
}
