import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../Hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
//创建了可复用的组件，用属性绑定语法让父组件控制子组件，用input装饰器让hero属性可以在外部绑定
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }


goBack(): void {
  this.location.back();
}
save(): void {
  if (this.hero) {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
}