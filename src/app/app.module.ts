import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { AlternateBoxesComponent } from './components/alternate-boxes/alternate-boxes.component';
import { BoxComponent } from './skills/box/box.component';
import { ServicesComponent } from './services/services.component';
import { TitleComponent } from './title/title.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ModalComponent } from './portfolio/modal/modal.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

var firebaseConfig = {
  apiKey: "AIzaSyCd29pcYo9q147sDlltlnWv25e7qABqk8s",
  authDomain: "portfolio-akash.firebaseapp.com",
  databaseURL: "https://portfolio-akash.firebaseio.com",
  projectId: "portfolio-akash",
  storageBucket: "",
  messagingSenderId: "786288604824"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    ProjectsComponent,
    SkillsComponent,
    AlternateBoxesComponent,
    BoxComponent,
    ServicesComponent,
    TitleComponent,
    PortfolioComponent,
    ModalComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,                 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
