import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public bgColor = 'blue';
  public show = false;

  public changeStatut() {
    this.show = !this.show;
  }

}
