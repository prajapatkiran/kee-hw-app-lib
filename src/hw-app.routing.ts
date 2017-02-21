import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HwAppComponent } from './hw-app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { HelloWorldSubComponent } from './hello-world/hello-world-sub/hello-world-sub.component';

const hwAppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/kee-hw-app',
    pathMatch: 'full'
  },
  {
    path: 'kee-hw-app',
    component: HwAppComponent
  },
  {
    path: 'kee-hw-app/hello-world',
    component: HelloWorldComponent
  },
  {
    path: 'kee-hw-app/hello-world-sub',
    component: HelloWorldSubComponent
  }
];

export const appRoutingProviders: any[] = [];

export const hwAppRouting: ModuleWithProviders = RouterModule.forChild(hwAppRoutes);
