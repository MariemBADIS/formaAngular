import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @HostBinding('style.backgroundColor') bgColor = 'red';

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave') mouseleave() {
    this.bgColor = 'blue';
  }

}
