import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PartesComponent } from './partes/partes.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'vehiculos', pathMatch: 'full' },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'partes', component: PartesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
  ];
  
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
