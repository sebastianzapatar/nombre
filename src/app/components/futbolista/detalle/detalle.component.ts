import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Futbolista } from 'src/app/models/futbolista';
import {FutbolistaService} from '../../../services/futbolista.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  futbolista:Futbolista;
  private fotoSeleccionada:File;
  constructor(private futbolistaService:FutbolistaService, 
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      let id:number=+params.get('id');
      if(id){
        this.futbolistaService.getFutbolista(id).subscribe(futbolista=>{
          this.futbolista=futbolista;
        })
      }
    })
  }
  seleccionarfoto(event){
    this.fotoSeleccionada=event.target.files[0];
    console.log(this.fotoSeleccionada);
  }
  subirfoto(){
    this.futbolistaService.subirFoto(this.futbolista.id,this.fotoSeleccionada).subscribe(
      futbolista=>{
        this.futbolista=futbolista;
        Swal.fire('El futbolista fue editado');
      }
    );
  }
}
