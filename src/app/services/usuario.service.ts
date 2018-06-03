import { Injectable } from '@angular/core';
import { Http, Response, Headers }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Usuario} from '../models/usuario';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class UsuarioService {

  constructor(public http: Http) {}

  getUsuarios(): Observable <Usuario []> {
    return this.http
               .get('http://localhost:8000/api/usuarios')
               .map(response => response.json().data);
  }

  addUsuario (usuario: Usuario){
    console.log('entra add user');
    console.log(usuario)
    return this.http.post(
      'http://127.0.0.1:8000/api/usuarios',usuario,
      {headers: new Headers({'Content-Type':  'application/json'})}
    ).map((response:Response)=>response.json().data);

  }

  
}