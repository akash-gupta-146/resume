import { Component, OnInit, Input } from '@angular/core';

interface Portfolio{
  title: string;
  image:string;
  date:string;
  category:string;
  client:string;
  link:string;
  description:string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() portfolio:Portfolio;

  constructor() {}

  ngOnInit() {}

  closeModal(){
    var a:any;
    a = document.getElementsByClassName('modal');
    a[0].style.display = 'none';
    a[0].style.opacity = '0';
  }

}
