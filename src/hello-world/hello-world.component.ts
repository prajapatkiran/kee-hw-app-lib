import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kee-hello-world',
  template: `<p>
    Hello, World! from a componnt!
  </p>`,
  styles: []
})
export class HelloWorldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
