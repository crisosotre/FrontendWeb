import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  usuario:Usuario;

  constructor(public usuarioService: UsuarioService) { 
    this.usuario={
      id: 0,
    codigo: "",
    nombre: "",
    carrera: "",
    semestre: "",
    correo: "",
    contrasena: "",
    tipo_usuario_id: 1,
    created_at: null,
    updated_at:null,
    deleted_at: null
    }
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(users=>{
      this.usuarios=users;
    });
  }

  iniciarSesion(){
    console.log(this.usuario);
    let usuariosFiltrados = this.usuarios.filter(valor =>valor.correo===this.usuario.correo && valor.contrasena === this.usuario.contrasena);
    console.dir(usuariosFiltrados);
    if(usuariosFiltrados.length>0)
      console.log("inicio sesion");
  }

}
