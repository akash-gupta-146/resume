import { Component, OnInit, Input } from '@angular/core';

interface Subject{
  name: string;
  title:string;
  date:string;
  description:string;
  points:string[];
}

@Component({
  selector: 'app-alternate-boxes',
  templateUrl: './alternate-boxes.component.html',
  styleUrls: ['./alternate-boxes.component.scss']
})
export class AlternateBoxesComponent implements OnInit {

  @Input() subjects: Subject[];
  @Input() title: string;
  
  constructor() { }

  ngOnInit() {
  }
}
