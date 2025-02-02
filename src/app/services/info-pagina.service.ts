import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { InfoPagina } from '../interfaces/info-pagina.interface';
@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any = {};

  cargada = false;
  constructor(private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json').subscribe(
      (resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(this.info.email)
      }
    )
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-aie-default-rtdb.europe-west1.firebasedatabase.app/equipo.json').subscribe(
      (resp: any) => {
        this.cargada = true;
        this.equipo = resp;
        console.log(this.equipo)
      }
    )
  }


}
