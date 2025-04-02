import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PartesComponent } from './partes/partes.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProtectedComponent } from './protected/protected.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'vehiculos', component: VehiculosComponent},
  { path: 'partes', component: PartesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'protected', component: ProtectedComponent },
  { path: '**', redirectTo: '' }
  ];
  
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
