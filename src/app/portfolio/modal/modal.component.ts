import { Component, OnInit, Input } from '@angular/core';

interface Portfolio{
  title: string;
  image:string[];
  date:string;
  category:string;
  client:string;
  link:string;
  description:string;
  points: string[];
  thumbnail:string;
  video:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() portfolio:Portfolio;
  
  portfolioType:string;
  slideShow:boolean = false; 

  youtubeVideo:any = document.getElementsByClassName('youtube-video');
  constructor() {}

  ngOnInit() {
    this.portfolioType = 'Play Video';
  }

  closeModal(){
    var a:any;
    a = document.getElementsByClassName('modal');
    a[0].style.display = 'none';
    a[0].style.opacity = '0';
    var video = document.getElementById('video');
    this.youtubeVideo[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');


  }

  toggleType(){
    this.slideShow = !this.slideShow;

    if(this.slideShow){
      this.portfolioType = 'Slide Show';
    }
    else{
      this.portfolioType = 'Play Video';
    }
  }

}
