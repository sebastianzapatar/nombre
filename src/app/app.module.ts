import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { FutbolistaComponent } from './components/futbolista/futbolista.component';
import {FutbolistaService} from './services/futbolista.service';
import { FormComponent } from './components/futbolistas/form.component';
import { DetalleFutComponent } from './components/futbolista/detalle-fut/detalle-fut.component';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'juegos',component:FutbolistaComponent},
  {path:'acercade',component:AcercadeComponent},
  {path:'contactenos',component:FormComponent},
  {path:'contactenos/:id',component:FormComponent},
  {path:'detalle/:id',component:DetalleFutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    JuegosComponent,
    AcercadeComponent,
    ContactenosComponent,
    FutbolistaComponent,
    FormComponent,
    DetalleFutComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//GET, POST, PUT, DELETE
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FutbolistaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
