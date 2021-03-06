import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// @Component is a decorator function that specifies the Angular metadata for the component
@Component({
  // The CLI generated three metadata properties:
  // selectorâ€” the component's CSS element selector
  selector: 'app-heroes',
  // templateUrlâ€” the location of the component's template file.
  templateUrl: './heroes.component.html',
  // styleUrlsâ€” the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css'],
})
// ngOnInit() is a lifecycle hook
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor() {}

  ngOnInit() {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
