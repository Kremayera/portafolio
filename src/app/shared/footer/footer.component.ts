import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  year: number = new Date().getFullYear();
  
  ngOnInit(): void {
    this.year = this.year -2;
  }
}
