import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/models/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  cursos: Course[]= [
    {
      id: 1,
      nombre: 'Angular',
      profesor: 'Carla',
      deleted: false,
      img: '../../../assets/img/angularr.png'
  },
  {
    id: 2,
    nombre: 'React',
    profesor: 'Sara',
    deleted: false,
    img: '../../../assets/img/logoreact.png'
},
{
  id: 3,
  nombre: 'Node',
  profesor: 'Sofia',
  deleted: false,
  img: '../../../assets/img/nodee.jpeg'
},
{
id: 4,
nombre: 'MySql',
profesor: 'Roman',
deleted: false,
img: '../../../assets/img/sql.jpg'
}
]
private cursosSubject: BehaviorSubject<Course[]>;

  constructor() { 
    this.cursosSubject = new BehaviorSubject<Course[]>(this.cursos);
  }

  obtenerCursos(): Observable<Course[]>{
    return this.cursosSubject.asObservable();
  }
  obtenerCursoId(id:number){
    return this.cursos[id-1];
  }

  agregarCurso(curso: Course){
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
  }
  eliminarCurso(id:number){
    let indice = this.cursos.findIndex((c: Course) => c.id ===id)
    if(indice > -1){
      this.cursos[indice].deleted = true;
    }
    this.cursosSubject.next(this.cursos);
  }
  editarCurso(curso: Course){
    let indice = this.cursos.findIndex((c: Course) => c.id === curso.id);
    if(indice > -1){
      this.cursos[indice] = curso;
    }
    this.cursosSubject.next(this.cursos);
  }

}
