import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Vehiculo{
    _id?: string;
    marca: string;
    modelo: string;
    matricula: string;
    precioAdquisicion: number;
  }

@Injectable({
    providedIn: 'root'
})

export class VehiculoService {
    private apiUrl: string = "http://localhost:3000/vehiculos";
    private http: HttpClient;
    private estado: string = 'A';

    constructor(http: HttpClient){
        this.http = http;
    }

    setEstado(newEstado: string){
        this.estado = newEstado;
    }

    getEstado(): string {
        return this.estado;
    }

    getVehiculos(): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(this.apiUrl);
    }

    addVehiculo(vehiculo: Vehiculo): Observable<any>{
        return this.http.post<Vehiculo>(this.apiUrl, vehiculo);
    }

    updateVehiculo(vehiculo: Vehiculo, id: string): Observable<any>{
        return this.http.put<Vehiculo>(`${this.apiUrl}/${id}`, vehiculo);
    }

    deleteVehiculo(id: string): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}