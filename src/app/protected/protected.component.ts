import { Component } from '@angular/core';
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

    constructor(private authService: AuthService, private router: Router){}

    ngOnInit(){
      this.isAuthenticated = !this.authService.getToken();
      if (!this.isAuthenticated){
        this.router.navigate(['/login'])
      }
    }
}
