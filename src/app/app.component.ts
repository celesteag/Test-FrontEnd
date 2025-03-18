import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehiculoService } from './app.service';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

@Component({
  selector: 'app-root',
  imports: [VehiculosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'concesionario-ui';
}
