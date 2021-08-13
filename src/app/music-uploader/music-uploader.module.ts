import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicUploaderPageRoutingModule } from './music-uploader-routing.module';

import { MusicUploaderPage } from './music-uploader.page';
import { FileSizePipe } from '../pipes/fileSize/file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicUploaderPageRoutingModule
  ],
  declarations: [MusicUploaderPage, FileSizePipe]
})
export class MusicUploaderPageModule {}
