import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from '../../Model/Personne';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent implements OnInit {

  @Input() personnes: Personne[];
  @Output() selectedPersonne = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public selectPersonne(selectedPersonne) {
    this.selectedPersonne.emit(
      this.selectedPersonne
    );
  }

}
