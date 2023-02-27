import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";



@Directive({
    selector: '[productHover]'
})

export class ProductHoverDirective{


    constructor(private el: ElementRef, private render: Renderer2){}

    @HostListener('mouseenter')
    mouseenter(){
        return this.render.setStyle(this.el.nativeElement, 'opacity', '0.8')
    }

    @HostListener('mouseleave')
    mouseleave(){
        this.render.setStyle(this.el.nativeElement, 'opacity', '1')
    }
}
