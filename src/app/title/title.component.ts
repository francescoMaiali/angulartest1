import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fra-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

title = 'ciao';
nome = 'pippo';
counter = 0 ;
isOff = true ;
textcolor = "orange";
size = "100px";

greet = () => {
  return 'ciao' + this.nome;
}

increment = () => {
  this.counter++;
console.log(this.counter);
}
  constructor() { }

  ngOnInit() {
    console.log('ON INIT');

    setInterval(this.increment, 1 *  1000);
  }

}
