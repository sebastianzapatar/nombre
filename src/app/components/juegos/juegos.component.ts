import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  public juegos:Array<any>;
  constructor() {   
    this.juegos=[
      {nombre:"GTA V",consola:"PC",year:2013,desarrolladora:"Rock Star"
      ,imagen:"https://i.blogs.es/dfbccc/trucosgtavps4/1366_2000.jpg"},
      {nombre:"CyberPunk",consola:"PC",year:2021,desarrolladora:"CD Project Red"
      ,imagen:"https://i.blogs.es/cfdce6/a-mercenary-on-the-rise-en/1366_2000.jpeg"},
      {nombre:"FIFA 21",consola:"PS4",year:2020,desarrolladora:"EA"
      ,imagen:"https://as02.epimg.net/meristation/imagenes/2020/09/29/noticias/1601379138_241929_1601379198_noticia_normal_recorte1.jpg"},
      {nombre:"PES e-football 2021",consola:"PC",year:2020,desarrolladora:"Konami"
      ,imagen:"https://www.konami.com/kde_cms/eu_publish/uploads/pes2021_4ambassadors_1920-1080_02-600x338.jpg"},
      {nombre:"NBA 2K21",consola:"PC",year:2020,desarrolladora:"2KSports",
      imagen:"https://i.blogs.es/5eddcc/nba-2k21/1366_2000.jpeg"},
      {nombre:"League of legends",consola:"PC",year:2009,desarrolladora:"Riot"
      ,imagen:"https://i.pinimg.com/736x/c6/46/1b/c6461bb98e24436abf11869fcc68a748.jpg"},
    ]
  }

  ngOnInit(): void {
  }

}

