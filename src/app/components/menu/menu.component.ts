import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public nombre:string;
  public apellido:string;
  public year:number;
  constructor() {
    this.nombre='Andres';
    this.apellido='Aranguren';
    this.year=1999;
   }

  ngOnInit(): void {
  }

}
