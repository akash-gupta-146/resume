import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


interface Services{
  title:string;
  icon:string;
  description:string;
  points:string[];
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  serviceCollection: AngularFirestoreCollection<Services>;
  receivedServices: Observable<Services[]>;;
  services:Services[];
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getServices();
  }

  getServices(){
    this.serviceCollection = this.afs.collection('services');
    this.receivedServices = this.serviceCollection.valueChanges();
    this.receivedServices.subscribe(response =>{
      this.services = response;
      console.log(response);
    })
  }

}
