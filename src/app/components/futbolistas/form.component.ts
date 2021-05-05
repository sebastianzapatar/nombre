import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {Futbolista} from '../../models/futbolista';
import {FutbolistaService} from '../../services/futbolista.service';
import {Router,ActivatedRoute} from '@angular/router';
import { Equipo } from 'src/app/models/Equipo';
import { Pais } from 'src/app/models/Pais';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public jugador:Futbolista=new Futbolista();
  public paises:Pais[];
  constructor(private futbolistaS:FutbolistaService,
    private router:Router, private active:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarJugador();
    this.futbolistaS.getPaises().subscribe(paises=>this.paises=paises);
    
  }
  public create():void{
   console.log(this.paises);
   this.futbolistaS.create(this.jugador).subscribe(
     response=>{this.router.navigate(['/juegos']);
     Swal.fire('El futbolista fue agregado')
    });
  }
  cargarJugador():void{
    this.active.params.subscribe(params=>{
        let id=params['id'];
        if(id){
          this.futbolistaS.getFutbolista(id).subscribe(
            jugador=>this.jugador=jugador
          )
        }
      }

    )
  }
  update():void{
    this.futbolistaS.update(this.jugador).subscribe(
      response=>{this.router.navigate(['/juegos']);
      Swal.fire('El futbolista fue editado')
    })
  }
 
}
