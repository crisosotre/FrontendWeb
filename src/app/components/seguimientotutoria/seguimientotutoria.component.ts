import { Component, OnInit } from '@angular/core';
import {Materia} from '../../models/materia';
import {Asistencia} from '../../models/asistencia';
import {Usuario} from '../../models/usuario';

import {AsistenciaService} from '../../services/asistencia.service';
import {MateriaService} from '../../services/materia.service';
import {UsuarioService} from '../../services/usuario.service';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


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
  usuario: Usuario;

  tipoId:string;


  constructor(public asistenciaService: AsistenciaService, public materiasService: MateriaService, public usuarioService: UsuarioService, private router: Router) {
      this.asistencia={
        estudiante_id:0,
        fecha:null,
        generoDiscursivo:"Argumentativo",
        id:0,
        materia_id:0,
        numEstudiantes:1,
        tipoTexto:"",
        tipoTutoria:"Lectura",
        tutor_id:0,
        programaAcademico:"Administración de Empresas"

      }
    }

    logout (){
      localStorage.removeItem('correo');
      this.router.navigate(['inicio'])
    }

    seguimiento(){
      this.router.navigate(['seguimientotutoria'])
    }

    observaciones(){
      this.router.navigate(['observacionestutoria'])
    }

    adicionarMateria() {
      this.router.navigate(['materia'])
    }

    registrarEstudiante() {
      this.router.navigate(['estudiante'])
    }

    registrarTutor(){
      this.router.navigate(['registro'])
    }

    reportes(){
      this.router.navigate(['reporte'])
    }

    addAsistencia(){
      this.asistencia.materia_id=this.materia;
      let filtro = this.estudiantes.filter(valor=>valor.codigo===this.codigoEstudiante);
      let estudiante = filtro.pop();
      //quemadp
      let idtutor:number =  parseInt(this.tipoId);

      this.asistencia.tutor_id=idtutor;
      if(estudiante==null){
        alert("no existe el estudiante con codigo "+this.codigoEstudiante);
      }else{
        console.log(new Date);
        let actual = new Date;
        let año =actual.getFullYear().toString();
        let mes = (actual.getMonth()+1).toString();
        if(mes.length==1){
          mes="0"+mes;
        }
        let dia = (actual.getDay()+3).toString();
        if(dia.length==1){
          dia="0"+dia;
        }
        let horas = actual.getHours().toString();
        if(horas.length==1){
          horas="0"+horas;
        }
        let minutos = actual.getMinutes().toString();
        if(minutos.length==1){
          minutos="0"+minutos;
        }
        let segundos =actual.getSeconds().toString();
        if(segundos.length==1){
          segundos="0"+segundos;
        }
        this.asistencia.fecha= año+"-"+mes+"-"+dia+" "+horas+":"+minutos+":"+segundos;
        this.asistencia.estudiante_id=estudiante.id;
        console.log(this.asistencia);
        this.asistenciaService.addAsistencia(this.asistencia).subscribe((response) =>{
          console.log(response.data);
        });
        this.refrescar();
      }
      
      
      
    }

    getMaterias(){
      this.materiasService.getMaterias().subscribe(valores=>{
        this.materias=valores;
      });
    }

  ngOnInit() {
    this.tipoId=localStorage.getItem('tipoId')

    let actual = new Date;
    let año =actual.getFullYear();
    let mes = actual.getMonth()+1;
    console.log(mes.toString().length);
    let dia = actual.getDay()+3;
    let horas = actual.getHours();
    let minutos = actual.getMinutes();
    let segundos =actual.getSeconds();
    let dias = actual.getHours();
    this.asistencia.fecha= año+"-"+mes+"-"+dia+" "+horas+":"+minutos+":"+segundos;
    console.log(this.asistencia.fecha);
    this.cargarDatos();
    this.usuario=this.usuarioService.getUsuario();
    }

    
    cargarDatos(){
      this.asistenciaService.getAsistencias().subscribe(asistencias=>
        {
          this.asistencias=asistencias
          console.log(this.asistencias);
        }
        );
        this.materiasService.getMaterias().subscribe( materias =>{
          this.materias = materias
          this.materia = materias[0].id;
        });
    
        this.usuarioService.getUsuarios().subscribe(usuarios =>{
          this.estudiantes=usuarios.filter(valor => valor.tipo_usuario_id==3);
        });
    }
   refrescar(){
    this.asistencia={
      estudiante_id:0,
      fecha:null,
      generoDiscursivo:"Argumentativo",
      id:0,
      materia_id:0,
      numEstudiantes:1,
      tipoTexto:"",
      tipoTutoria:"Lectura",
      tutor_id:0,
      programaAcademico:"Administración de Empresas"

    }
    this.codigoEstudiante="";
   }


   
  }


