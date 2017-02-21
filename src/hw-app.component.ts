import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kee-hw-app',
  template: `<p>
    hw-app works!
    <kee-app-abcd></kee-app-abcd>
  </p>
  <nav>
    <a routerLink="/kee-hw-app/hello-world" routerLinkActive="active">Kee Hello World Route!</a>
  </nav>
  <nav>
    <a routerLink="/kee-hw-app/hello-world-sub" routerLinkActive="active">Kee Hello World -:Sub:- Route!</a>
  </nav>
  <router-outlet></router-outlet>`,
  styles: []
})
export class HwAppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
