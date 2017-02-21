import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-sub',
  template: `<p>
    Hello, World! from sub-componnt!
  </p>`,
  styles: []
})
export class HelloWorldSubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
