import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

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
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolioCollection:AngularFirestoreCollection<Portfolio>;
  receivedPortfolio: Observable<Portfolio[]>;
  portfolios:Portfolio[];

  currentPortfolio:Portfolio;
  
  categories: string[] = [];
  currentCategory:string;

  constructor(private afs:AngularFirestore) { }

  ngOnInit() {
    this.getPortfolio();
    this.currentCategory = 'all';
  }

  openModal(p){
    this.currentPortfolio = p;
    var a:any = document.getElementsByClassName('modal');
      a[0].style.display = 'block';
      a[0].style.opacity = '1';
    

  }
  
  setCategory(cat){
    this.currentCategory = cat;
  }

  checkInArray(category){
    for(let cat of this.categories){
      if(cat == category){
        return true;
      }
    }
    return false;
  }

  getPortfolio(){
    this.portfolioCollection = this.afs.collection('portfolio');
    this.receivedPortfolio = this.portfolioCollection.valueChanges();
    this.receivedPortfolio.subscribe( response =>{
      this.portfolios = response;
      for(let a of response){
        let count:number = 0;
        if(a.category){
          let category:string = a.category;
          if(!this.checkInArray(category)){
            this.categories.push(a.category);
          }
        }
      }
  });
}
}