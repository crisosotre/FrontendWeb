import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../models/usuario';
import {UsuarioService} from '../../services/usuario.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Command } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios: Usuario[];
  usuario:Usuario;

  constructor(public usuarioService: UsuarioService, private router: Router) { 
    this.usuarios=[];
    this.usuario={
      id: 0,
    codigo: "",
    nombre: "",
    carrera: "",
    semestre: "",
    correo: "",
    contrasena: "",
    tipo_usuario_id: 1
    }
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(users=>{
      this.usuarios=users;
    });
  }

  iniciarSesion(){
    console.log(this.usuario);
    let usuariosFiltrados = this.usuarios.filter(valor =>valor.correo===this.usuario.correo 
      && (valor.tipo_usuario_id==1 || valor.tipo_usuario_id==2) && valor.contrasena === this.usuario.contrasena);
    console.dir(usuariosFiltrados);
    if(usuariosFiltrados.length>0){
      this.usuarioService.setUsuario(usuariosFiltrados.pop())
      localStorage.setItem('correo',usuariosFiltrados[0].correo);
      this.router.navigate(['seguimientotutoria']);
      console.log("inicia sesion")
    }
  }

}