import { EmpleadoComponent } from './empleado/empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'',component:EmpleadoComponent},
  { path:'edit/:id',component:EditarEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
