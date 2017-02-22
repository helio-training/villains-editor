import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import Villain from '../models/villain';


@Component({
  selector: 'villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.scss']
})
export class VillainsListComponent {

  villains: Villain[] = [
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

  @Output() selectedVillain = new EventEmitter<Villain>();

  selected: Villain;


  constructor() {
    // this.villainSelected = this.villains[0];
    // this.selected = this.villains[0];
  }

  villainClicked(villain) {
    this.selected = villain;
    this.selectedVillain.emit(villain);
  }
}
