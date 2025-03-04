import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: false
})
export class LoadingPage implements OnInit {

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.route.navigate(['/payment']);
    }, 3000);
  }

}
