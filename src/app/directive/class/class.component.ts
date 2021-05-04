import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  firstClass = true;
  secondClass = false;
  thirdClass = true;
  show = true;

  myTeam = ['Malek', 'Rym', 'Lobna', 'Asma'];

  constructor() {
  }

  ngOnInit() {
  }

  changeStyleBtn1() {
    this.firstClass = true;
    this.secondClass = false;
    this.thirdClass = false;
  }

  changeStyleBtn2() {
    this.firstClass = false;
    this.secondClass = true;
    this.thirdClass = false;
  }

  changeStyleBtn3() {
    this.firstClass = false;
    this.secondClass = false;
    this.thirdClass = true;
  }

}
