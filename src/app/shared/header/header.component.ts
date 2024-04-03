import { Component } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public servicio: InfoPaginaService, private router: Router){

  }

  buscarProducto(value: string){
    
    if(value.length <3){ return;}
    this.router.navigate(['/search', value]);
    console.log(value);

  }

}
