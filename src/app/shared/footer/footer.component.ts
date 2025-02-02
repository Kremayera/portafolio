import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  year: number = new Date().getFullYear();

  constructor(public servicio: InfoPaginaService){

  }
  
  ngOnInit(): void {
    this.year = this.year -2;
  }
}
