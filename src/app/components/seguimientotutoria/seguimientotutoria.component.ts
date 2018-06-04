import { Component, OnInit } from '@angular/core';
import {Materia} from '../../models/materia';
import {Asistencia} from '../../models/asistencia';
import {Usuario} from '../../models/usuario';

import {AsistenciaService} from '../../services/asistencia.service';
import {MateriaService} from '../../services/materia.service';
import {UsuarioService} from '../../services/usuario.service';


@Component({
  selector: 'app-seguimientotutoria',
  templateUrl: './seguimientotutoria.component.html',
  styleUrls: ['./seguimientotutoria.component.css']
})
export class SeguimientotutoriaComponent implements OnInit {

  asistencia: Asistencia;
  asistencias: Asistencia[];
  materia: number;
  materias: Materia[];

  codigoEstudiante: string;
  estudiantes: Usuario[];

  constructor(public asistenciaService: AsistenciaService, public materiasService: MateriaService, public usuarioService: UsuarioService) {
    this.asistencia={
      estudiante_id:0,
      fecha:null,
      generoDiscursivo:"Genero Discursivo",
      id:0,
      materia_id:0,
      numEstudiantes:0,
      tipoTexto:"",
      tipoTutoria:"Tipo de Tutoría",
      tutor_id:0,
      programaAcademico:"Programa Académico"

    }
    }

    addAsistencia(){
      this.asistencia.materia_id=this.materia;
      console.log(this.asistencia);
      
      this.asistenciaService.addAsistencia  (this.asistencia).subscribe((response) =>{
        console.log(response.data);
      });
      this.refrescar();
      
    }

    getMaterias(){
      this.materiasService.getMaterias().subscribe(valores=>{
        this.materias=valores;
      });
    }

  ngOnInit() {
    this.asistenciaService.getAsistencias().subscribe(asistencias=>
    {
      this.asistencias=asistencias
    }
    );
    this.materiasService.getMaterias().subscribe( materias =>{
      this.materias = materias
    });

    this.usuarioService.getUsuarios().subscribe(usuarios =>{
      this.estudiantes=usuarios.filter(valor => valor.tipo_usuario_id==1);
    });
    //campo nombre materia
    let nombreMateria="Ingeniería de Software"
    let materias: Materia[]
    this.materiasService.getMaterias().subscribe(valores=>{
      materias=valores
      let busquedaMaterias =valores.filter(materia=>materia.nombre===nombreMateria);
      if(busquedaMaterias.length>0){
        this.asistencia.materia_id=busquedaMaterias.pop().id;
        let response2=this.asistenciaService.addAsistencia(this.asistencia).subscribe((response) =>{
          console.log(response.data);
        });
      }
    })
    }

   refrescar(){
    this.asistencia={
      estudiante_id:0,
      fecha:null,
      generoDiscursivo:"Genero Discursivo",
      id:0,
      materia_id:0,
      numEstudiantes:0,
      tipoTexto:"",
      tipoTutoria:"Tipo de Tutoría",
      tutor_id:0,
      programaAcademico:"Programa Académico"

    }
   }


   
  }


