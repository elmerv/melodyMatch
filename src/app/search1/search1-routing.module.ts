import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Search1Page } from './search1.page';

const routes: Routes = [
  {
    path: '',
    component: Search1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Search1PageRoutingModule {}
