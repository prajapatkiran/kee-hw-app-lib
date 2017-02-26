import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-sub',
  template: `
    <md-card>
      <md-card-title>Hello World Sub</md-card-title>
      <md-card-content>
        <md-icon>home</md-icon><span>Hello from Columbus, OH!</span></md-card-content>
    </md-card>
  `,
  styles: []
})
export class HelloWorldSubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
