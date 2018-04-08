import { Component, OnInit, transition} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Project{
  name: string;
  title:string;
  date:string;
  description:string;
  points:string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  title:string = 'Projects';

  projectDoc: AngularFirestoreCollection<Project>
  receivedProjects: Observable<Project[]>
  projects: Project[];
  constructor(private afs:AngularFirestore) { }


  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.projectDoc = this.afs.collection('projects');
    this.receivedProjects = this.projectDoc.valueChanges();
    this.receivedProjects.subscribe(response => {
      this.projects = response;
    })
  }

}
