import {Component, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;

  constructor() {
  }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'BADIS', 'Mariem', 30, '1.png', 1, 'developpeuse front end'),
      new Personne(2, 'Allouchi', 'Idriss', 31, '2.png', 2, 'developpeuse front end'),
      new Personne(3, 'Rihani', 'Salim', 36, '3.png', 3, 'developpeuse front end'),
      new Personne(4, 'chaouch', 'Rym', 38, '4.png', 4, 'developpeuse front end')
    ];
  }

  public selectPersonne(personne) {
    this.selectedPersonne = personne;
  }

}
