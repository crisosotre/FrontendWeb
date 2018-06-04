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

  addMateria(){
    let materiaVacia={
      id:0,
      nombre:"",
      profesor:"NN",
      tipoCurso:"Tipo de curso"
    };

    if(this.materia.nombre==materiaVacia.nombre){
      alert("Debe ingresar un nombre para la materia");
    }
    if(this.materia.tipoCurso==materiaVacia.tipoCurso){
      alert("Debe seleccionar un tipo de curso");
    }
    console.log("entra add materia");
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

}
