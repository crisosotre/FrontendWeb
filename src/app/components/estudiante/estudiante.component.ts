import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from '../../services/usuario.service'

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante: Usuario;
  estudiantes: Usuario[];


  constructor(public estudiantesService: UsuarioService) { 
    this.estudiante={
      carrera: "Programa Académico",
      codigo: "",
      contrasena: "NN",
      correo: "",
      id: 0,
      nombre: "",
      semestre: "Semestre",
      tipo_usuario_id: 3
    }

    this.estudiantes=[];

  }

  ngOnInit() {
    this.estudiantesService.getUsuarios().subscribe(estudiantes =>{
      let estudiantesFiltro = estudiantes.filter(valores => valores.tipo_usuario_id==3);
      console.log(estudiantesFiltro);
    });
  }

  addEstudiante(){
    let estudianteVacia ={
      carrera: "Programa Académico",
      codigo: "",
      contrasena: "NN",
      correo: "",
      id: 0,
      nombre: "",
      semestre: "Semestre",
      tipo_usuario_id: 3
    }
    let parar:boolean=false;
    if(this.estudiante.carrera==estudianteVacia.carrera){
      alert("debe ingresar la carrera del estudiante");
      parar=true;
    }
    if(this.estudiante.codigo==estudianteVacia.codigo){
      alert("debe ingresar el código");
      parar=true;
    }
    if(this.estudiante.correo==""){
      alert("debe ingresar el correo del estudiante ");
      parar=true;

    }
    if(this.estudiante.carrera==estudianteVacia.carrera){
      alert("Debe ingresar la carrera");
      parar=true;

    }
    if(this.estudiante.nombre=""){
      alert("debe ingresar el nombre del estudiante");
      parar=true;

    }

    console.log(this.estudiante);
      if(parar==false && this.estudiantes.filter(estudiante=>estudiante.codigo==this.estudiante.codigo).length==0){
        this.estudiantesService.addUsuario(this.estudiante).subscribe(estudiantes =>{
          console.log(estudiantes);
      });
    }else{
      alert("Ya existe un estudiante con el codigo "+this.estudiante.codigo);
    }
  }

}