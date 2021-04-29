import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty;
  @Output() sendRequestToData = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log('Consulter la variable color du parent ', this.filsProperty);
  }

  sendEventToParent() {
    this.sendRequestToData.emit(
      `Please can I have some money :) `
    );
  }

}
