import { Component, signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-protected',
  imports: [],
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
        this.texto.set(r.message);
      });
    }
}
