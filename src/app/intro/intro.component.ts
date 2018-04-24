import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HeaderComponent } from '../header/header.component';

interface Intro{
  name:string;
  title:string;
  summary:string;
  resume:string;
}

interface SocialLinks{
  name:string;
  href:string;
  icon:string;
  resume:string;
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  introDoc: AngularFirestoreDocument<Intro>;
  intro: Observable<Intro>;
  summary: Intro;

  socialDoc: AngularFirestoreDocument<SocialLinks>;
  social: Observable<SocialLinks>;
  socialLinks: SocialLinks;

  testArray:any[] = [];

  constructor(private afs: AngularFirestore,
              private headerService:HeaderComponent
            ) { }

  ngOnInit() {
    this.getSummary();
    this.getSocialDetails();
  }

  getSummary(){
    this.introDoc = this.afs.doc('intro/zvg54q7L4Ci4Hyo2c4Lh');
    this.intro = this.introDoc.valueChanges();
    this.intro.subscribe(notes => {
      this.summary = notes;
    })
  }
  getSocialDetails(){
    this.socialDoc = this.afs.doc('social-links/Ai9CBiYUcsDiYnmIu1M4')
    this.social = this.socialDoc.valueChanges();
    this.social.subscribe(socialLink => {
      this.socialLinks = socialLink;
      // console.log(this.socialLinks);
      Object.keys(this.socialLinks).forEach((element:any,index) => {
        this.testArray[index] = element;
      });
      // console.log(this.testArray);
    });
  }

  scrollTo(id){
    this.headerService.scrollTo(id);
  }

}
