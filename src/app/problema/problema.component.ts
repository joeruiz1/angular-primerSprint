import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problema',
  templateUrl: './problema.component.html',
  styleUrls: ['./problema.component.css']
})
export class ProblemaComponent implements OnInit {

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