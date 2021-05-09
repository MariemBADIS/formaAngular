import {Component, OnInit} from '@angular/core';
import {PremierService} from '../premier.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
  providers: [PremierService]
})
export class ColorComponent implements OnInit {

  color = 'blue';

  constructor(private premierService: PremierService) {
  }

  ngOnInit() {
  }

  changeColor(input) {
    this.color = input.value;
    input.value = '';
  }

  processRequest(message: any) {
    alert(message);
  }

  loggerMesData() {
    this.premierService.logger('test');
  }
}
