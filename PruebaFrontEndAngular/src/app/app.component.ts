import { EmpleadoServiceService } from './empleado-service.service';
import { Empleado } from './empleado.model';
import { Component } from '@angular/core';
import { UntypedFormControl, ValidationErrors, Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaFrontEndAngular';

  

}
