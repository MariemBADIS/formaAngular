import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tab = ['blue', 'coral', 'pink', 'green', 'gold', 'lightGray', 'orange'];


  @HostBinding('style.borderColor') borderColor;
  @HostBinding('style.color') color;

  constructor() { }

  @HostListener('keypress') changeColor() {
    const index = Math.floor(Math.random() * (this.tab.length - 1));
    this.color = this.tab[index];
    this.borderColor = this.tab[index];
  }

}
