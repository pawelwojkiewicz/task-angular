import { Directive, EventEmitter, Input, Output, HostListener, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Color } from '../types/color.type';
import { ListService } from '../list.service';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  @Input() colors: Color[];
  color: string;
  clickNumber = 0;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  @HostListener('click', ['$event']) onClick(): void {
    this.color = this.colors[this.clickNumber].hex;
    this.clickNumber++;
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.color);

    if (this.clickNumber === 10) {
      this.renderer.removeStyle(this.elRef.nativeElement, 'background-color');
      this.clickNumber = 0;
    }
  }
}


