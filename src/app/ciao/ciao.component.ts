import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fra-ciao',
  templateUrl: './ciao.component.html',
  styleUrls: ['./ciao.component.scss']
})
export class CiaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ciao component è rponto!');
  }

}
