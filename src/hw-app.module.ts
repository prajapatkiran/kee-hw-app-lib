import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldSubComponent } from './hello-world/hello-world-sub/hello-world-sub.component';
import { HwAppComponent } from './hw-app.component';
import { AbcdComponent } from './abcd/abcd.component';

import { hwAppRouting } from './hw-app.routing';

@NgModule({
  imports: [
    CommonModule,
    hwAppRouting
  ],
  declarations: [
    HelloWorldComponent,
    HelloWorldSubComponent,
    HwAppComponent,
    AbcdComponent]
})
export class HwAppModule { }
