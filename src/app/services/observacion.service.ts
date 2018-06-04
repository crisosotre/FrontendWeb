import { Injectable } from '@angular/core';
import { Http, Response, Headers }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Observacion } from '../models/observacion';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ObservacionService {

  constructor(public http: Http) { }

    getObservaciones(): Observable <Observacion []> {
      return null;
    }

    addUsuario (observacion: Observacion){
    
  
    }
  
  
}