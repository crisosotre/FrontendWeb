import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import {MateriaService} from '../../services/materia.service';
import { Router } from '@angular/router';


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

  usuario: Usuario;
  correoUsuario: string;

  usuarios: any[];
  
  constructor(public usuarioService:UsuarioService, public materiaService:MateriaService, private router: Router) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(tutores=>{
      this.tutores =tutores.filter(user=>user.tipo_usuario_id!=3).map(user=>{
        return({
          usuario: user,
          tipo: (user.tipo_usuario_id==1)? "Tutor":"Administrador"
        })
      });
      this.materiaService.getMaterias().subscribe(materias=>
        this.materias=materias
      )
    });
    
    //Esta es la variable del localstorage que tiene el correo y se debe usar para obtener al usurio haciendo la consulta.
    this.correoUsuario=localStorage.getItem('correo')
    this.usuario = this.usuarioService.getUsuario();
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

}
