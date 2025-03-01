import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent  implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() rate: number = 0;
  @Input() price: number = 0;

  constructor() { }

  ngOnInit() {}

}
