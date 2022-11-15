import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Students } from 'src/app/models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  estudiantes: Students[]=[
    {
      idStudent:1,
      dni: 19,
      nombre: 'Carlos',
      apellido: 'Londra',
      fechaNacimiento: new Date('2000-08-1'),
      fechaAlta: new Date('2022-01-1'),
      deleted: false,
    },
    {
      idStudent:2,
      dni: 20,
      nombre: 'Camilo',
      apellido: 'Sexto',
      fechaNacimiento: new Date('2000-08-1'),
      fechaAlta: new Date('2022-01-1'),
      deleted: false,
    },
    {
      idStudent:3,
      dni: 39,
      nombre: 'Sebastian',
      apellido: 'Treseget',
      fechaNacimiento: new Date('2000-08-27'),
      fechaAlta: new Date('2022-01-1'),
      deleted: false,
    },
  ]
  private estudiantesSubject: BehaviorSubject<Students[]>;

  constructor() { 
    this.estudiantesSubject = new BehaviorSubject<Students[]>(this.estudiantes);
  }

  obtenerEstudiantes(): Observable<Students[]>{
    return this.estudiantesSubject.asObservable();
  }
  obtenerEstudianteId(id:number){
    return this.estudiantes[id-1];
  }

  agregarEstudiante(estudiante: Students){
    this.estudiantes.push(estudiante);
    this.estudiantesSubject.next(this.estudiantes);
  }
  eliminarEstudiante(id:number){
    let indice = this.estudiantes.findIndex((c: Students) => c.idStudent ===id)
    if(indice > -1){
      this.estudiantes[indice].deleted = true;
    }
    this.estudiantesSubject.next(this.estudiantes);
  }
  editarEstudiante(estudiante: Students){
    let indice = this.estudiantes.findIndex((c: Students) => c.idStudent === estudiante.idStudent);
    if(indice > -1){
      this.estudiantes[indice] = estudiante;
    }
    this.estudiantesSubject.next(this.estudiantes);
  }


}
