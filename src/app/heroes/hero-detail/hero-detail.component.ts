import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  //@Input() hero: Hero | undefined;

  hero$!: Observable<Hero | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) {}

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getHero(params.get('id')!))
    );

    /* Alternativa senza Observable
    const id = this.route.snapshot.paramMap.get('id')!
    this.hero$ = this.service.getHero(id)*/

    /* this.route.paramMap.subscribe((par) => {
      let test = par.get('id');
      console.log('test');
    }); */
  }

  goToHeroes() {
    this.router.navigate(['/heroes']);
  }

  goToHero(hero: Hero) {
    const heroId = hero ? hero.id : null;
    this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  }
}
