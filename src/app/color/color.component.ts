import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color = 'blue';

  constructor() { }

  ngOnInit() {
  }

  changeColor(input) {
    this.color = input.value;
    input.value = '';
  }

  processRequest(message: any) {
    alert(message);
  }
}
