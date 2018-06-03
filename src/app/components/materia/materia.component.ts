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
      profesor:"",
      tipoCurso:""
    }
  }
  
  ngOnInit() {
  }

  addMateria(){

  }

}
