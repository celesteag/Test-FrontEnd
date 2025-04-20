import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

    private getHeaders() {
        const token: string = localStorage.getItem('token') ?? "";
        return new HttpHeaders({
            "Authorization": "Bearer " + token
        }); 
    }

    setEstado(newEstado: string){
        this.estado = newEstado;
    }

    getEstado(): string {
        return this.estado;
    }

    getVehiculos(): Observable<Vehiculo[]> {
        return this.http.get<Vehiculo[]>(this.apiUrl, {headers: this.getHeaders()});
    }

    addVehiculo(vehiculo: Vehiculo): Observable<any>{
        return this.http.post<Vehiculo>(this.apiUrl, vehiculo, {headers: this.getHeaders()});
    }

    updateVehiculo(vehiculo: Vehiculo, id: string): Observable<any>{
        return this.http.put<Vehiculo>(`${this.apiUrl}/${id}`, vehiculo, {headers: this.getHeaders()});
    }

    deleteVehiculo(id: string): Observable<any>{
        return this.http.delete(`${this.apiUrl}/${id}`, {headers: this.getHeaders()});
    }
}