import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      
      console.error(error); 
  
      
      this.log(`${operation} failed: ${error.message}`);
  
      
      return of(result as T);
    };
  }
  private heroesUrl = 'api/heroes';
  constructor( private http: HttpClient,
    private messageService: MessageService) { }
    getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl)
        .pipe(
          catchError(this.handleError<Hero[]>('getHeroes', []))
        );
    }

  getHero(id: number): Observable<Hero> {

    const hero = HEROS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
