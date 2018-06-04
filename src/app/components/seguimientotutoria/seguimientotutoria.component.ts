import { Component, OnInit } from '@angular/core';
import {Materia} from '../../models/materia';
import {Asistencia} from '../../models/asistencia';
import {AsistenciaService} from '../../services/asistencia.service';
import {MateriaService} from '../../services/materia.service';


@Component({
  selector: 'app-seguimientotutoria',
  templateUrl: './seguimientotutoria.component.html',
  styleUrls: ['./seguimientotutoria.component.css']
})
export class SeguimientotutoriaComponent implements OnInit {

  asistencia: Asistencia;
  asistencias: Asistencia[];
  materia: Materia;
  materias: Materia[];
  codigoEstudiante: string;

  constructor(public asistenciaService: AsistenciaService, public materiasService: MateriaService) {
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

    this.materia={
      id:0,
      nombre:"Materia",
      profesor:"",
      tipoCurso:""
    }

    }

    addAsistencia(){
      this.asistencia={
        estudiante_id:1,
        fecha:"",
        generoDiscursivo:"TEST",
        id:0,
        materia_id:1,
        numEstudiantes:0,
        tipoTexto:"TEST",
        tipoTutoria:"TEST",
        tutor_id:2,
        programaAcademico:"TEST"
      }
      this.materia={
        id:0,
        nombre:"Materia",
        profesor:"TEST",
        tipoCurso:"TEST"
      }
      
      this.asistenciaService.addAsistencia(this.asistencia).subscribe((response) =>{
        console.log(response.data);
      });
    }

    getMaterias(){
      this.materiasService.getMaterias().subscribe(valores=>{
        this.materias=valores;
      });
    }

  ngOnInit() {
    //this.asistenciaService.dummy();
    this.asistenciaService.getAsistencias().subscribe(asistencias=>
    {
      this.asistencias=asistencias
    }
    );

    this.asistencia={
      estudiante_id:1,
      fecha: "2012-03-21 00:00:00",
      generoDiscursivo:"Genero Discursivo",
      id:44,
      materia_id:1,
      numEstudiantes:0,
      tipoTexto:"Tipo de Texto",
      tipoTutoria:"Tipo de Tutoría",
      tutor_id:1,
      programaAcademico: "Programa Académico"
    }
    this.materia={
      id:0,
      nombre:"Materia",
      profesor:"TEST",
      tipoCurso:"TEST"
    }
    //campo nombre materia
    let nombreMateria="Ingeniería de Software"


    let materias: Materia[]
    this.materiasService.getMaterias().subscribe(valores=>{
      materias=valores
      console.log(materias);
      let busquedaMaterias =valores.filter(materia=>materia.nombre===nombreMateria);
      if(busquedaMaterias.length>0){
        this.asistencia.materia_id=busquedaMaterias.pop().id;
        console.log("id materia: "+this.asistencia.materia_id);
        let response2=this.asistenciaService.addAsistencia(this.asistencia).subscribe((response) =>{
          console.log(response.data);
        });
      }
    })
    //else{
    //  this.materiasService.addMaterias(this.materia).subscribe(valores=>{
    //    console.log(valores);
    //  })
    }

    //if(this.materias)

    
   // console.log(response2);
  }


