import {Component, OnInit, Input} from '@angular/core';
import Villain from '../models/villain';


@Component({
  selector: 'villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.scss']
})
export class VillainsListComponent {
  
  @Input() villains: Villain[];
}
