import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '@pokemon/models';

@Component({
  selector: 'pokemon-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() pokemon?: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
