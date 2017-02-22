import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HwAppComponent } from './hw-app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldSubComponent } from './hello-world/hello-world-sub/hello-world-sub.component';
import { AbcdComponent } from './abcd/abcd.component';

import { HwAppRoutingModule } from './hw-app.routing.module';

@NgModule({
  imports: [
    CommonModule,
    HwAppRoutingModule
  ],
  declarations: [
    HwAppComponent,
    HelloWorldComponent,
    HelloWorldSubComponent,
    AbcdComponent]
})
export class HwAppModule { }
