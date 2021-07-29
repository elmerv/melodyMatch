import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Search1PageRoutingModule } from './search1-routing.module';

import { Search1Page } from './search1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Search1PageRoutingModule
  ],
  declarations: [Search1Page]
})
export class Search1PageModule {}
