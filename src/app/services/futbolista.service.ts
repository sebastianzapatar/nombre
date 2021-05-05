import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {map,catchError} from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Futbolista} from '../models/futbolista';
import {Pais} from '../models/Pais';


@Injectable({
  providedIn: 'root'
})
export class FutbolistaService {
  private urlEndPoint='http://localhost:2020/api/futbolista';
  private httpHeaders=new HttpHeaders({'Content-type':'application/json'});
  constructor(private http:HttpClient, private router:Router) { }
  getFutbolistas():Observable<Futbolista[]>{
    return this.http.get<Futbolista[]>(this.urlEndPoint).pipe(
      map(response=>{
        let futbolistas= response as Futbolista[];
        return  futbolistas.map(futbolista=>{
          futbolista.nombre=futbolista.nombre.toUpperCase();
          return futbolista;
        });
      })
    );
  }
  create(futbolista:Futbolista):Observable<Futbolista>{
    console.log(futbolista);
    return this.http.post<Futbolista>(this.urlEndPoint,futbolista,
      {headers:this.httpHeaders}).pipe(
        catchError(e=>{
          console.log(e.error.mensaje);
          if(e.status==400){
            Swal.fire('Error al crear el cliente',e.error.mensaje,'error');
            return throwError(e);
          }
          Swal.fire('Error al crear el cliente',e.error.mensaje,'error');
          return throwError(e);
        })
      );
  }
  delete(id:number):Observable<Futbolista>{
    console.log(`${this.urlEndPoint}/${id}`);

    return this.http.delete<Futbolista>(`${this.urlEndPoint}/${id}`,
    {headers:this.httpHeaders}).pipe(
      catchError(e=>{
        console.log(e.error.mensaje);
        Swal.fire('Error al eliminar el futbolista',e.error.mensaje,'error');
        return throwError(e);
      })
    );;
  }
  update(futbolista:Futbolista):Observable<Futbolista>{
    return this.http.put<Futbolista>(
      `${this.urlEndPoint}/${futbolista.id}`,futbolista,
    {headers:this.httpHeaders}).pipe(
      catchError(e=>{
        if(e.status==400){
          return throwError(e);
        }
        console.log(e.error.mensaje);
        Swal.fire('Error al borrar el cliente',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
  getFutbolista(id:number):Observable<Futbolista>{
    return this.http.get<Futbolista>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e=>{
        this.router.navigate(['/juegos']);
        Swal.fire('No se encuentra el registro en la BD',e.error.mensaje,'error');
        return throwError(e);
      })
    );
  }
  getPaises():Observable<Pais[]>{
    return this.http.get<Pais[]>(this.urlEndPoint+'/paises');
  }
  subirFoto(id,archivo:File){
    let formData=new FormData();
    formData.append("archivo",archivo);
    formData.append("id",id);
    return this.http.post(`${this.urlEndPoint}/upload`,formData).pipe(
      map((response:any)=>response.Futbolista as Futbolista),
      catchError(e=>{
        Swal.fire('No se pudo subir la imagen',e.error.mensaje,'error');
        return throwError(e);
      })
    )
  }
}
