import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre     : string = 'Capitan America';
  nombre2    : string = 'oldaHir GOmez mErInO';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI         : number = Math.PI;
  porcentaje : number = 0.265;
  salario    : number = 1234.5;
  fecha      : Date = new Date();
  idioma     : string = 'fr';
  videoURL   : string = 'https://www.youtube.com/embed/VRLe66rGNc0';
  activar    : boolean = true;
  
  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  })
  
  heroe = {
    nombre: 'logan',
    clave: 500,
    direccion: {
      calle: 'Boulevard',
      casa: 4
    }
  }
}
