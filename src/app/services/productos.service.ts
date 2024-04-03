import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto_idx } from '../interfaces/producto_idx.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto_idx: Producto_idx[] = [];
  productosFiltrado: Producto_idx[] = [];


  constructor(private http: HttpClient) {
    this.cargarProductos_idx();
   }

  private cargarProductos_idx(){

    return new Promise<void>((resolve, reject) => {
      this.http.get('https://angular-html-aie-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json').subscribe(
        (resp: any) => {
          console.log(resp);
          this.producto_idx= resp;        
          this.cargando=false;
          resolve();
        })   
    })
   
  }

  getProducto(id: String){
    return this.http.get('https://angular-html-aie-default-rtdb.europe-west1.firebasedatabase.app/productos/'+ id + '.json')
    //this.http.get(`https://angular-html-aie-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`).subscribe(      
  }

  buscarProducto( termino: string){
    this.productosFiltrado = [];
    if(this.producto_idx.length>0){
      this.filtrarProducto(termino);
    }else{
      this.cargarProductos_idx().then(()=> {this.filtrarProducto(termino);})
    }    
  }

  filtrarProducto(termino: string){
    termino = termino.toLocaleLowerCase();
    
    this.producto_idx.forEach(prod =>{
      const titulo = prod.titulo?.toLocaleLowerCase();
      if(prod.categoria?.includes(termino) || titulo?.includes(termino) ){
        this.productosFiltrado.push(prod);
      }
    })
  }
}
