import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoundbytesPage } from './soundbytes.page';

const routes: Routes = [
  {
    path: '',
    component: SoundbytesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoundbytesPageRoutingModule {}
