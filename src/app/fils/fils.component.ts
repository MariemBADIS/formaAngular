import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty: any;

  constructor() { }

  ngOnInit() {
    console.log('Consulter la variable color du parent ', this.filsProperty);
  }

}
