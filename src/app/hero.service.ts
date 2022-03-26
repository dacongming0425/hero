import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROS);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
