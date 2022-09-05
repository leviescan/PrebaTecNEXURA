import { EmpleadoServiceService } from './../empleado-service.service';
import { Empleado } from './../empleado.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  empleado: Empleado = {
    id: undefined,
    nombre: '',
    email: '',
    sexo: '',
    area_id: undefined,
    boletin: '',
    descripcion: '',
    rol_id: undefined
  }

  constructor( private actroute:ActivatedRoute, private router:Router, private service:EmpleadoServiceService) { }

  ngOnInit(): void {
    this.getEmpleado();
  }

  getEmpleado(){
    const  params  = this.actroute.snapshot.params
    this.service.getEmpleado1(params['id']).subscribe(re => {
      this.empleado = re;

    })
  }

  updateEmpleado(){
    if (confirm("Realmente quieres editar los datos?")) {
    this.service.updateEmpleado(this.empleado.id, this.empleado).subscribe(re => {
      console.log(re);
        this.router.navigate(['/'])},
        er => {console.log(er)
    })

  }
}
}
