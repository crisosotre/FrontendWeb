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
    this.materias=[];
    console.log('constructor------');
    this.materiaService.getMaterias().subscribe( materias =>{
      this.materias = materias
      let nombresMaterias = materias.map(valor=>(valor.nombre))
      this.doughnutChartLabels=nombresMaterias
      this.randomColors();
    });
  }


  ngOnInit() {
    this.asistenciaService.getAsistencias().subscribe( asistencias => {
      this.asistencias=asistencias
      this.doughnutChartData=[2,34,4]
      let retorno: number[] = [];
      this.materias.forEach(materia => {
        let cantidad =0;
        let filtro=this.asistencias.filter(mat => mat.materia_id==materia.id).forEach(element => {
          cantidad+=element.numEstudiantes
        });;
        retorno.push(cantidad);
      });
      this.doughnutChartData=retorno;
  });
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

  public lineChartColors:Array<any> = [];

  randomColors(){
    for (let index = 0; index < this.doughnutChartLabels.length; index++) {
      console.log(Math.random()*255);
      let base ='rgba('+Math.random()*255+','+Math.random()*255+','+Math.random()*255;
      this.lineChartColors.push({ // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
      });
      
    }

    console.dir(this.lineChartColors);
  }
}
