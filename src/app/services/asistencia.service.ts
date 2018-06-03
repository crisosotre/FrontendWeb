import { Injectable } from '@angular/core';
import { Http, Response, Headers }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Asistencia} from '../models/asistencia';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class AsistenciaService {

  constructor(public http: Http) {}

  getAsistencias(): Observable <Asistencia []> {
    return this.http
               .get('http://localhost:8000/api/asistencias')
               .map(response => response.json().data);
  }

  dummy(){
    this.http.get('http://localhost:8000/api/asistencias').map(response => response.json().data).subscribe(x=>console.log(x));
  }

  addAsistencia (asistencia: Asistencia){
    return this.http.post(
      'http://localhost:8000/api/asistencias', asistencia,
      {headers: new Headers({'Content-Type':  'application/json'})}
    ).map((response:Response)=>response.json().data);

  }

  
}