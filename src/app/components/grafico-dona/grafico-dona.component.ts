import { Component, OnInit } from '@angular/core';
import {AsistenciaService} from '../../services/asistencia.service'
import {MateriaService} from '../../services/materia.service'
import { Materia } from '../../models/materia';
import { Asistencia } from '../../models/asistencia';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {

  public materias: Materia[];
  public asistencias: Asistencia[];
  public doughnutChartLabels:string[];
  doughnutChartData:number[]=[0];
  public doughnutChartType:string = 'doughnut';

  constructor(public asistenciaService: AsistenciaService, public materiaService: MateriaService) { 
    console.log('constructor------');
    this.asistenciaService.getAsistencias().subscribe( asistencias => {
        this.asistencias=asistencias
        this.doughnutChartData=[2,34,4]
        let retorno: number[];
        this.materias.forEach(materia => {
          retorno.push(this.materias.filter(mat => mat.nombre===materia.nombre).length);
        });
        console.log(retorno)
    });

    this.materiaService.getMaterias().subscribe( materias =>{
      this.materias = materias
      let nombresMaterias = materias.map(valor=>(valor.nombre))
      this.doughnutChartLabels=nombresMaterias

    });
  }


  ngOnInit() {
    
    //console.log(this.materiasVar);
    console.log('inirt------');
    //console.log(this.materias);

  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
