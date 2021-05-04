import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color = 'yellow';
  @Input() bgColor = 'green';
  @Input() fontSize = '18px';

  constructor() {
  }

  ngOnInit() {
  }

  public changeSize(size) {
    this.fontSize = size + 'px';
  }

}
