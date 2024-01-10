import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaxDigits]',
  standalone: true,
})
export class MaxDigitsDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: any) {
    const inputVal = event.target.value;
    const maxLength = 5;

    if (inputVal.length > maxLength) {
      this.el.nativeElement.value = inputVal.slice(0, maxLength);
    }
  }
}
