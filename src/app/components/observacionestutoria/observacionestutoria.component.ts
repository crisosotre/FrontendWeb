import { Component, OnInit } from '@angular/core';

import {UsuarioService} from '../../services/usuario.service';
import {ObservacionService} from '../../services/observacion.service';

import {Usuario} from '../../models/usuario';
import {Observacion} from '../../models/observacion'

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

  constructor(public observacionService:ObservacionService, public usuarioService:UsuarioService) { 
    this.refrescar();
  }

  ngOnInit() {

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
      let tutor=this.usuarioService.getUsuario();
      this.observacion.tutor_id=tutor.id;

      this.observacionService.addObservacion(this.observacion).subscribe(valores=>
        console.log(valores)
      );
      console.log(this.observacion);
      this.refrescar();
    }
  }

}

