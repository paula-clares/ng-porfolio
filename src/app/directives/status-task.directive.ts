import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskStatus]',
  standalone: false
})
export class StatusTaskDirective {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    //el.nativeElement.style.backgroundColor = 'red';
  }

  @Input() set appTaskStatus(completed: boolean) {
    //console.log("completado", completed);
    if (!completed) {
      //this.el.nativeElement.style.color = 'yellow';
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red')
    } else {
      //this.el.nativeElement.style.color = 'green';
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green')
    }
  }

}
