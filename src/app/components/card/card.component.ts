import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent  implements OnInit {
  @Input() id: number = 0;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() category: string = '';
  @Input() rate: number = 0;
  @Input() price: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {}

  goToDetail(): void {
    this.router.navigate(['/card-detail', this.id])
  }
}
