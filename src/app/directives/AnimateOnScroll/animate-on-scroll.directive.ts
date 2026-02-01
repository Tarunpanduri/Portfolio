import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: false
})
export class AnimateOnScrollDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animate-slideInLeft');
            observer.unobserve(this.el.nativeElement);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.el.nativeElement);
  }
}
