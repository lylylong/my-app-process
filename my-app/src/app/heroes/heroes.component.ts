import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

// @Component is a decorator function that specifies the Angular metadata for the component
@Component({
  // The CLI generated three metadata properties:
  // selector— the component's CSS element selector
  selector: 'app-heroes',
  // templateUrl— the location of the component's template file.
  templateUrl: './heroes.component.html',
  // styleUrls— the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css'],
})
// ngOnInit() is a lifecycle hook
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() {}

  ngOnInit() {}
}
