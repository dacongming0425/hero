import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ButtonModule } from '@alauda/ui';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule
   
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
