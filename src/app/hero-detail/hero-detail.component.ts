import { Component, OnInit ,Input} from '@angular/core';
import { Hero } from '../Hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
//创建了可复用的组件，用属性绑定语法让父组件控制子组件，用input装饰器让hero属性可以在外部绑定
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}