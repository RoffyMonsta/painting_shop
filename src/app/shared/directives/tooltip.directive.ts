import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  tooltipContent: HTMLElement;
  @Input("tooltip") text: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.tooltipContent = this.renderer.createElement("div");
    this.renderer.appendChild(this.el.nativeElement, this.tooltipContent);
    this.renderer.addClass(this.tooltipContent, "tooltip");
    this.tooltipContent.textContent = this.text
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.removeChild(this.el.nativeElement, this.tooltipContent);
  }

}
