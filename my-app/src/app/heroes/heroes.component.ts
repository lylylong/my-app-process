import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
  hero = 'Windstorm';
}
