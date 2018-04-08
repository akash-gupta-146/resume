import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Skill{
  name:string;
  value:number;
  category:string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {

  skillCollection: AngularFirestoreCollection<Skill>;
  receivedSkills: Observable<Skill[]>;
  skills: Skill[];

  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    this.getSkills();
    window.addEventListener('scroll',this.setAnimations);
  }

  getSkills(){
    this.skillCollection = this.afs.collection('skills');
    this.receivedSkills = this.skillCollection.valueChanges();
    this.receivedSkills.subscribe(response => {
      this.skills = response;
    });
  }

  setAnimations(){
    var box:any = document.getElementsByClassName('delay-animation');
    for(var i=0; i<box.length;i++){
      var boxPos = box[i].offsetTop;
      var cursorPos = window.scrollY;
      if(cursorPos >= boxPos - 800  ){
        box[i].classList.add('slideUp');
      }
      if(cursorPos > boxPos + 800 ){
        // box[i].classList.remove('animate');
      }
    }
  }

}
