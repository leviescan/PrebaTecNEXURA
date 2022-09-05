import { Empleado } from './empleado.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  createempleado(empleado: Empleado) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  url:string = "http://localhost:8000";

  getEmpleado(){
    return this.http.get<Empleado[]>(this.url+'/api/empleados');
  }


  createEmpleado(empleado:Empleado){
    return  this.http.post<Empleado>(`${this.url}/api/empleados/`, empleado);
  }

  updateEmpleado(id:any, empleado:Empleado){
    return  this.http.put<Empleado>(`${this.url}/api/empleados/${id}`, empleado);
  }

  deleteEmpleado(id:any){
    return  this.http.delete<Empleado>(`${this.url}/api/empleados/${id}`);
  }

  getEmpleado1(id:any){
    return  this.http.get<Empleado>(this.url+'/api/empleados/'+id);
  }
}
