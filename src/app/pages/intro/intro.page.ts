import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: false
})
export class IntroPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.route.navigate(['/home']);
    }, 3000);
  }

}
