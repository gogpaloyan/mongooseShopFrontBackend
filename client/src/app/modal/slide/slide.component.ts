import {Component, Input, OnInit} from '@angular/core';





@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() images: any
  @Input() indicators: boolean = true
  @Input() controls: boolean = true
  @Input() autoSlide: boolean = false
  @Input() slideInterval: number = 3000
  id: any;
  selectedIndex = 0

  prev(){

    if(0 === this.selectedIndex){
      this.selectedIndex = this.images.length - 1
    }else{
      this.selectedIndex = this.selectedIndex - 1
    }
  }

  next(){
    if(this.images.length - 1 > this.selectedIndex){
      this.selectedIndex = this.selectedIndex + 1
    }else{
      this.selectedIndex = 0
    }
  }
  gg(i:number){
    if(this.id) {
      clearInterval(this.id);
    }
    this.selectedIndex = i
    return this.autoSlide = false
  }


  autoSlideImage(){
    this.id = setInterval(()=> {
        this.next()
    }, this.slideInterval)

  }


  constructor() { }

  ngOnInit(){
    if(this.autoSlide){
      this.autoSlideImage()
    }
  }


}
