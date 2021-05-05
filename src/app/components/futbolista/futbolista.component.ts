import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Futbolista} from '../../models/futbolista';
import {FutbolistaService} from '../../services/futbolista.service';
@Component({
  selector: 'app-futbolista',
  templateUrl: './futbolista.component.html',
  styleUrls: ['./futbolista.component.css']
})
export class FutbolistaComponent implements OnInit {
  futbolistas:Futbolista[];
  constructor(private futbolistaS:FutbolistaService) { }

  ngOnInit(): void {//Cuando carga el componente
    this.futbolistaS.getFutbolistas().subscribe(
      futbolistas=>this.futbolistas=futbolistas
    );
  }
  delete(jugador:Futbolista):void{
    Swal.fire({
      title: 'Esta seguro de eliminar al jugador?',
      text: "No puede deshacer la accion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Despidelo por malo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.futbolistaS.delete(jugador.id).subscribe(
            response=>this.futbolistas=this.futbolistas.filter(
              jugadores=>jugadores!=jugador 
            )
        )
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        
      }
    })
  }
}
