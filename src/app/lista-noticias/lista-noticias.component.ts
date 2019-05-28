import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
  primeiraNoticia:any = "../assets/img/noticias/fila-espera_640x424.jpg";
  vandalismoNoticia:any = "../assets/img/noticias/glass_640x424.jpg";
  acidentesNoticia:any = "../assets/img/noticias/crash_640x424.jpg";
  ferroVelhoNocicia:any = "../assets/img/noticias/scrapyard_640x424.jpg";
  israelNocicia:any = "../assets/img/noticias/Israel_640x424.jpg";
  constructor() { }

  ngOnInit() {
  }

}
