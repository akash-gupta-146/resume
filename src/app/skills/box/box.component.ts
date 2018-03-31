import { Component, OnInit, Input  } from '@angular/core';
interface Skill{
  name:string;
  value:number;
  category:string;
}
@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() skills: Skill[];
  @Input() category:string;
  constructor() { }

  ngOnInit() {
  }

}
