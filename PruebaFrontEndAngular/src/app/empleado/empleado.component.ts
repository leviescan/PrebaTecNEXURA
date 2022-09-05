import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, ValidationErrors, Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { EmpleadoServiceService } from '../empleado-service.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  validateForm!: FormGroup;
  rols = [
    { name: "Administardor", id: 1, value: 1,},
    { name: "Profesor", id: 2, value: 2, },
  ];

  empleados: Empleado[] = [];

  submitForm(): void {
     this.validateForm.value.rol_id = this.validateForm.value.rol.toString();
     this.service.createEmpleado(this.validateForm.value).subscribe( re => {
      this.loadEmpleados();
      this.validateForm.reset();
      }
    );
  }

  userNameAsyncValidator = (control: UntypedFormControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'Andres') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });



  constructor(private fb: FormBuilder, public service:EmpleadoServiceService, private router:Router) {
    this.validateForm = this.fb.group({
      nombre: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      sexo: ['', [Validators.required]],
      area_id: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      boletin: false,
      rol: this.fb.array([]),
      rol_id: ['', [Validators.requiredTrue]]
    });
  }

  onChange(e:any){

    const rol: FormArray =this.validateForm.get('rol') as FormArray;
    console.log(rol);
    if (e.target.checked){
      rol.push(new FormControl(e.target.value));
    }
    else {
      const index = rol.controls.findIndex(x => x.value === e.target.value);
      rol.removeAt(index);
   }
  }

  ngOnInit(): void {

    this.loadEmpleados();
  }

  loadEmpleados(){

    this.service.getEmpleado().subscribe(res => {
      this.empleados = res;
    })

  }

  removeUser(id:any){
    if (confirm("Realmente quieres eliminar empleado?")) {
    this.service.deleteEmpleado(id).subscribe( re=> {
      this.loadEmpleados();
    }

    )
    }
  }


}
