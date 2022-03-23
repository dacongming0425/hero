import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero : Hero = {
    id : 1 ,
    name : 'Mike'


  };
   heroes = HEROS ;
  constructor() { }

  ngOnInit(): void {
  }

}
