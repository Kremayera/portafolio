import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from 'src/app/interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  producto: Producto = {};
  productoId: String = "";
  constructor( private route: ActivatedRoute, public productosService: ProductosService ){
        
  }

  ngOnInit(): void {
    this.route.params
    .subscribe(parametros => {
      this.productoId = parametros['id'];
      this.productosService.getProducto(parametros['id']).subscribe(
        (producto: Producto) => {
          this.producto = producto;
          console.log(producto)
        }
      )
  })
  }

}
