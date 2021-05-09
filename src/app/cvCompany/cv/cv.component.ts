import {Component, OnInit} from '@angular/core';
import {Personne} from '../../Model/Personne';
import {PremierService} from '../../premier.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  personnes: Personne [];
  selectedPersonne: Personne;

  constructor(private premierService: PremierService) {
  }

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'BADIS', 'Mariem', 30, '1.png', 1, 'developpeuse front end'),
      new Personne(2, 'Allouchi', 'Idriss', 31, '2.png', 2, 'developpeuse front end'),
      new Personne(3, 'Rihani', 'Salim', 36, '3.png', 3, 'developpeuse front end'),
      new Personne(5, 'Test', 'Test', 38, '', 4, 'test')
    ];
    this.premierService.logger(this.personnes);
    this.premierService.addData('data from cv component');
    this.premierService.logger(this.personnes);
  }

  public selectPersonne(personne) {
    this.selectedPersonne = personne;
  }

}
