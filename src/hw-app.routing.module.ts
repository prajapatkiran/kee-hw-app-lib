import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HwAppComponent } from './hw-app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldSubComponent } from './hello-world/hello-world-sub/hello-world-sub.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'kee-hw-app', component: HwAppComponent },
    { path: 'kee-hw-app/hello-world', component: HelloWorldComponent },
    { path: 'kee-hw-app/hello-world-sub', component: HelloWorldSubComponent }
  ])],
  exports: [RouterModule]
})
export class HwAppRoutingModule {}
