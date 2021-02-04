import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accion } from '../_model/accion';
import { Presente } from '../_model/presente';
import { HOST } from '../_share/var.constant';

@Injectable({
  providedIn: 'root'
})
export class AccionsService {

  url: string = `${HOST}/totales`
  url2: string = `${HOST}/presentes`
  acciones: Accion[] = [];

  constructor(private http: HttpClient) {
    
  }
  getAccionesTotales(codemiP: string, fechaP: string){
    return this.http.post<number>(this.url, {codemi: codemiP, fecha: fechaP})
  }
  getAccPresentes(codemiP: string, fechaP: string){
    return this.http.post<number>(this.url2,{codemi: codemiP, fecha: fechaP})
  }
}
