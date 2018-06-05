import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../../services/usuario.service';
import {ObservacionService} from '../../services/observacion.service';

import {Usuario} from '../../models/usuario';
import {Observacion} from '../../models/observacion'
import { Router } from '@angular/router';

@Component({
  selector: 'app-observacionestutoria',
  templateUrl: './observacionestutoria.component.html',
  styleUrls: ['./observacionestutoria.component.css']
})
export class ObservacionestutoriaComponent implements OnInit {

  trato= 5;

  usuarios:Usuario[];
  usuario:Usuario;

  rate=4;
  observacion:Observacion;

  tipoId:string;


  constructor(public observacionService:ObservacionService, public usuarioService:UsuarioService, private router: Router) { 
    this.refrescar();
  }

  ngOnInit() {
    this.usuario=this.usuarioService.getUsuario();
    this.tipoId=localStorage.getItem('tipoId')

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
  
  refrescar(){
    this.observacion={
      id:0,
      tiempoSuficiente:"SI",
      tipoTutoria:"Tipo de Tutoría",
      tutor_id:0,
      tutoriaDaHerramientas:5,
      tratoDelTutor: 5,
      inquietudesSolucionadas: "SI",
      comentarios:""
    }
  }
  addObservacion(){
    
    if(this.observacion.tipoTutoria==="Tipo de Tutoría"){
      alert("Debe seleccionar un tipo de tutoría");
    }else{
      if(this.observacion.comentarios===""){
        this.observacion.comentarios="NN";
      }
      this.observacion.tutor_id=parseInt(this.tipoId);

      this.observacionService.addObservacion(this.observacion).subscribe(valores=>
        console.log(valores)
      );
      console.log(this.observacion);
      this.refrescar();
    }
  }

}

