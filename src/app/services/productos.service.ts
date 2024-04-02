import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto_idx } from '../interfaces/producto_idx.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto_idx: Producto_idx[] = [];



  constructor(private http: HttpClient) {
    this.cargarProductos_idx();
   }

  private cargarProductos_idx(){
    this.http.get('https://angular-html-aie-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json').subscribe(
      (resp: any) => {
        console.log(resp);
        this.producto_idx= resp;
        this.cargando=false;
      })
  }

}
