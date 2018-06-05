import { Component, OnInit } from '@angular/core';
import {Materia} from '../../models/materia';
import {MateriaService} from '../../services/materia.service';
import { Router } from '@angular/router';
import {Usuario} from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materia: Materia;
  materias: Materia[];
  usuario: Usuario;
  
  tipoId:string;


  constructor(public materiasService: MateriaService, private router: Router, public usuarioService: UsuarioService) { 
    this.materia={
      id:0,
      nombre:"",
      profesor:"NN",
      tipoCurso:"Tipo de curso"
    }
    this.materias=[];
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
  
  ngOnInit() {
    this.materiasService.getMaterias().subscribe(materias=>{
      this.materias=materias;
      console.log(this.materias);
    });
    this.tipoId=localStorage.getItem('tipoId');
  }

  refrescar(){
    this.materia={
      id:0,
      nombre:"",
      profesor:"NN",
      tipoCurso:"Tipo de curso"
    }
    this.materias=[];
  }
  addMateria(){
    let materiaVacia={
      id:0,
      nombre:"",
      profesor:"NN",
      tipoCurso:"Tipo de curso"
    };

    let parar:boolean=false;
    if(this.materia.nombre===materiaVacia.nombre){
      parar=true;
      alert("Debe ingresar un nombre para la materia");
    }
    if(this.materia.tipoCurso===materiaVacia.tipoCurso){
      parar=true;
      alert("Debe seleccionar un tipo de curso");
    }
    console.log("entra add materia");
    if(parar==false){
      if(this.materias.filter(materia=>materia.nombre==this.materia.nombre).length>0){
      alert("la materia ya existe");
    } else{
      console.log(this.materia);
      this.materiasService.addMaterias(this.materia).subscribe(valores=>{
        alert("registro exitoso");
        this.materias=valores;
      });
    } 
  }
    this.refrescar();
  }

}
