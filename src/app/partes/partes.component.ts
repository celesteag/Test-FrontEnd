import { Component, OnInit, signal } from '@angular/core';
import { VehiculoService } from '../app.service';
import { Vehiculo } from '../app.service';
import { single } from 'rxjs';


interface Parte {
  _id: number;
  coche: string;
  vendedor: string;
  comprador: string;
  precioCompra: number;
}

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent {
  partes = signal<Parte[]>([]);
  editando = signal(false);
  parteActual = signal<Parte | null>(null);

  coche = signal('');
  vendedor= signal('');
  comprador= signal('');
  precioCompra= signal(0);

  addParte() {
    if (this.editando() && this.parteActual()) {
      this.partes.update(partes =>
        partes.map(p =>
          p._id === this.parteActual()!._id
            ? { ...p, coche: this.coche(), vendedor: this.vendedor(), comprador: this.comprador(), precioCompra: this.precioCompra() }
            : p
        )
      );
      this.editando.set(false);
      this.parteActual.set(null);
    } else {
      const nuevaParte: Parte = {
        _id: Date.now(),
        coche: this.coche(),
        comprador: this.comprador(),
        vendedor: this.vendedor(),
        precioCompra: this.precioCompra()
      };
      this.partes.update(partes => [...partes, nuevaParte]);
    }

    this.limpiarCampos();
  }

  updateParte(parte: Parte) {
    this.editando.set(true);
    this.parteActual.set(parte);
    this.coche.set(parte.coche);
    this.vendedor.set(parte.vendedor);
    this.comprador.set(parte.comprador);
    this.precioCompra.set(parte.precioCompra);
  }

  deleteParte(id: number) {
    this.partes.update(partes => partes.filter(p => p._id !== id));
  }

  limpiarCampos() {
    this.coche.set('');
    this.comprador.set('');
    this.vendedor.set('');
    this.precioCompra.set(0);
  }
}