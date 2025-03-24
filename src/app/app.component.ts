import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { VehiculoService } from './app.service';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PartesComponent } from './partes/partes.component';

@Component({
  selector: 'app-root',
  imports: [VehiculosComponent, PartesComponent, RouterOutlet, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concesionario-ui';

}
