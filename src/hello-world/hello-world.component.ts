import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kee-hello-world',
  template: `<p>
    Hello, World! from a componnt!
  </p>`,
  styles: [
    `p {
      background-color: 2px solid gray;
      padding: 10px;
    }`
  ]
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
