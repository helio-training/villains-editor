import { Component } from '@angular/core';
import Villain from "./models/villain";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  badGuys: Villain[] = [
    {
      id: 1,
      name: 'Harambe',
      power: 5
    },
    {
      id: 2,
      name: 'Darth Vader',
      power: 10
    },
    {
      id: 3,
      name: 'Dead Pool',
      power: 5
    },
    {
      id: 4,
      name: 'Lawyers',
      power: 1
    }
  ];
  
  selectedVillain: Villain;
  
  constructor() {
    this.selectedVillain = this.badGuys[0];
  }
  
}
