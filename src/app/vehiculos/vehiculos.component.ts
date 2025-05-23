import { Component, OnInit, signal } from '@angular/core';
import { VehiculoService } from '../app.service';
import { Vehiculo } from '../app.service';
import { single } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-vehiculos',
  imports: [],
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})

export class VehiculosComponent implements OnInit {

  constructor(private vehiculoService: VehiculoService) { }

  vehiculos = signal<Vehiculo[]>([]);
  marca = signal('');
  modelo = signal('');
  matricula = signal('');
  precioAdquisicion = signal(0);
  editando_id = signal("");
  editando = signal<boolean>(false);

  ngOnInit(): void {
    this.getVehiculos();
  }

  getVehiculos() {
    this.vehiculoService.getVehiculos().subscribe((data) => {
      this.vehiculos.set(data);
    })
  }



  updateVehiculo(vehiculo: Vehiculo) {
    this.editando.set(true);
    this.marca.set(vehiculo.marca);
    this.modelo.set(vehiculo.modelo);
    this.matricula.set(vehiculo.matricula);
    this.precioAdquisicion.set(vehiculo.precioAdquisicion);
    this.editando_id.set(vehiculo._id ? vehiculo._id : "");

  }

  cleanFormulario() {
    this.marca.set('');
    this.modelo.set('');
    this.matricula.set('');
    this.precioAdquisicion.set(0);
  }

  addVehiculo() {
    const vehiculo = { marca: this.marca(), modelo: this.modelo(), matricula: this.matricula(), precioAdquisicion: this.precioAdquisicion()};
    if (this.editando()) {
      this.vehiculoService.updateVehiculo(vehiculo, this.editando_id()).subscribe();
      this.editando_id.set("");
      this.editando.set(false);
    } else {
      if(this.precioAdquisicion() > 0){
        this.vehiculoService.addVehiculo(vehiculo).subscribe(()=> {
          this.getVehiculos();
          this.cleanFormulario();
        }, (error) => {
          alert("Error al añadir vehículo: " + error.error.message);
        });
      } else {
        alert("Importe debe ser mayor que 0")
      }
      
    }

  }




  deleteVehiculo(id: any) {
    this.vehiculoService.deleteVehiculo(id).subscribe(() => {
      this.getVehiculos();
    })

  }

}
