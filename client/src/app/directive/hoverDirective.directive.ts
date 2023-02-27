import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";



@Directive({
   selector: '[HoverDirective]'
})

export class HoverDirectiveDirective implements OnInit{


    constructor(private el: ElementRef, private render: Renderer2){}


    ngOnInit(){
        this.render.setStyle(this.el.nativeElement, 'margin', '20px')
        this.render.setStyle(this.el.nativeElement, 'padding', '20px')
        this.render.setStyle(this.el.nativeElement, 'border-radius', '20px')
        this.render.setStyle(this.el.nativeElement, 'backgroundColor', 'green')
        this.render.setStyle(this.el.nativeElement, 'cursor', 'pointer')
    }

    @HostListener('mouseenter')
    mouseEnter(){
        this.render.setStyle(this.el.nativeElement, 'padding', '25px')
        this.render.setStyle(this.el.nativeElement, 'opacity', '1')
    }

    @HostListener('mouseleave')
    mouseleave(){
        this.render.setStyle(this.el.nativeElement, 'padding', '20px')
        this.render.setStyle(this.el.nativeElement, 'opacity', '0.8')
    }

}