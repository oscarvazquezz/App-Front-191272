import { NgModule } from '@angular/core';
//declaro las libreriias de routes,roturmodule
import { Routes,RouterModule } from '@angular/router';
//declaro las librerias de los componentes
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsuarioComponent } from '../usuario/usuario.component';

//es declarar las urls
const routes: Routes = [
  {
    path : 'Login',
    component : LoginComponent
  },
  {
    path : 'Dashboard',
    component : DashboardComponent
  },
  {
    path : 'Usuario',
    component : UsuarioComponent
  }
];

//importo y exporto el routes y routermodule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
