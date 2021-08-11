import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoundbytesPageRoutingModule } from './soundbytes-routing.module';

import { SoundbytesPage } from './soundbytes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoundbytesPageRoutingModule
  ],
  declarations: [SoundbytesPage]
})
export class SoundbytesPageModule {}
