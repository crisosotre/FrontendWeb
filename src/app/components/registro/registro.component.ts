import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario:Usuario;
  usuarios: Usuario[];

  constructor(public usuarioService: UsuarioService) {
    this.usuario={
      id: 0,
    codigo: "",
    nombre: "",
    carrera: "Programa Académico",
    semestre: "Semestre",
    correo: "",
    contrasena: "",
    tipo_usuario_id: 1
    }
  }

  refrescar(){
    this.usuario={
      id: 0,
    codigo: "",
    nombre: "",
    carrera: "Programa Académico",
    semestre: "Semestre",
    correo: "",
    contrasena: "",
    tipo_usuario_id: 1
    }
  }
  ngOnInit() {
    console.log('CARGANDO USUARIOS');
    this.usuarioService.getUsuarios().subscribe((usuariosNuevos) =>{
      this.usuarios= usuariosNuevos;
    });
  }

  addUser(){
    //console.dir(this.usuarios);
    //console.log('Entra al add user');
    let response2 = this.usuarioService.addUsuario(this.usuario).subscribe((response) =>{
      console.log(response.data);
    });
    console.log(response2);
    this.refrescar();
  }

}
