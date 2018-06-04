import { Component, OnInit } from '@angular/core';
import {Materia} from '../../models/materia';
import {MateriaService} from '../../services/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  materia: Materia;
  materias: Materia[];
  
  constructor(public materiasService: MateriaService) { 
    this.materia={
      id:0,
      nombre:"",
      profesor:"NN",
      tipoCurso:"Tipo de curso"
    }
    this.materias=[];
  }
  
  ngOnInit() {
    this.materiasService.getMaterias().subscribe(materias=>{
      this.materias=materias;
      console.log(this.materias);
    });
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
