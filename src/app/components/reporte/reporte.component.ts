import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import {MateriaService} from '../../services/materia.service';


@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  public labelTablaTutores:Array<any> = [ 'Codigo', 'Nombre', 'Carrera', 'Correo', 'Semestre','Tipo de Usuario'];
  tutores: any[];

  public tablaMaterias:Array<any> = [ 'Nombre', 'Tipo Curso'];
  materias: any[];

  constructor(public usuarioService:UsuarioService, public materiaService:MateriaService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(tutores=>{
      this.tutores =tutores.filter(user=>user.tipo_usuario_id!=3).map(user=>{
        return({
          usuario: user,
          tipo: (user.tipo_usuario_id==1)? "Tutor":" Administrador"
        })
      });
      this.materiaService.getMaterias().subscribe(materias=>
        this.materias=materias
      )
    });
  }

}
