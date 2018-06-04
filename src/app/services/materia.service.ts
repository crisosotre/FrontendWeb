import { Injectable } from '@angular/core';
import { Http, Response, Headers }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Materia} from '../models/materia';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class MateriaService {

  constructor(public http: Http) {}

  getMaterias(): Observable <Materia []> {
    return this.http
               .get('http://localhost:8000/api/materias')
               .map(response => response.json().data);
  }

  addMaterias (materia: Materia){
    return this.http.post(
      'http://127.0.0.1:8000/api/materias',materia,{headers: new Headers({'Content-Type':  'application/json'})}
    ).map((response:Response)=>response.json().data);

  }

  
}