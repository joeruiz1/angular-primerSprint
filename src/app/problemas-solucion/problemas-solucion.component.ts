import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problemas-solucion',
  templateUrl: './problemas-solucion.component.html',
  styleUrls: ['./problemas-solucion.component.css']
})
export class ProblemasSolucionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFunc(){
    console.log("function called");
    alert('Correcto');
  }
  Incorrecto(){
    alert('InCorrecto');
  }

}