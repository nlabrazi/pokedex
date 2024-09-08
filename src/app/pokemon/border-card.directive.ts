import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#007BFF';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease, box-shadow 0.3s ease');
  }

  @Input('pkmnBorderCard') borderColor: string;

  // Hover effect on desktop
  @HostListener('mouseenter') onMouseEnter() {
    this.setHoverEffect(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setHoverEffect(false);
  }

  // Touch effect on mobile (tap)
  @HostListener('touchstart') onTouchStart() {
    this.setHoverEffect(true);
  }

  @HostListener('touchend') onTouchEnd() {
    this.setHoverEffect(false);
  }

  private setHoverEffect(isHovered: boolean) {
    if (isHovered) {
      this.setBorder(this.borderColor || this.defaultColor);
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0px 4px 20px rgba(0, 123, 255, 0.5)');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.05)');
    } else {
      this.setBorder(this.initialColor);
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', 'none');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
    }
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 1px ${color}`;
  }
}
