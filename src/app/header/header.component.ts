import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface Header{
  pages:string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  page: AngularFirestoreCollection<Header>;
  pages: Observable<Header[]>;
tabs:any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.page = this.afs.collection('header');
    this.pages = this.page.valueChanges();
    this.pages.subscribe ( element => {
      this.tabs = element[0].pages;
    })
  }

  collapse(a){
    var sidebar = document.getElementById('nav');
    if(a == 'close'){
      sidebar.style.transform = 'translate(-300px)';
      document.getElementById('close').style.display = 'block';
    }
    if(a == 'open'){
      sidebar.style.transform = 'translate(0)';
      document.getElementById('close').style.display = 'none';
    }
  }

}
