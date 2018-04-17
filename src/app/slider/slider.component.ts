import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  @Input() images:string[];
  
  slider:any = document.getElementById('slider')
  slides:any = document.getElementsByClassName('slide');
  slideIndex:any = 0;
  


  
  constructor() { }

  ngOnInit() {
    this.showSlide();
    setTimeout(()=>{    //<<<---    using ()=> syntax
      this.next()
    },3000);
  }
  changeSlide(n){
    if(this.slideIndex < this.slides.length){
      this.slideIndex = this.slideIndex + n;
    }
    this.showSlide();
  }
  
  next(){
    if(this.slideIndex == this.slides.length-1){
      this.slideIndex = 0;
      this.showSlide();
    }
    else{
      this.changeSlide(1);
    }
  }
  
  previous(){
    if(this.slideIndex == 0){
      this.slideIndex = this.slides.length - 1;
      this.showSlide();
    } 
    else{
      this.changeSlide(-1);
    }
  }

  showSlide(){
    for(let i=0; i < this.slides.length; i++ ){
      this.slides[i].style.opacity = '0';
    } 
    this.slides[this.slideIndex].style.opacity = '1';
    this.slides[this.slideIndex].style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }

}





