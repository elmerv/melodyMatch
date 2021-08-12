import { Component, OnInit, ViewChild, QueryList,ViewChildren } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IonRange } from '@ionic/angular';
import {Observable} from 'rxjs';
import { Howl } from 'howler';

export interface Track {
  name: string;
  filePath: string;
  isPlaying: boolean;
  progress: number;
  audioTitle:string;
  audioDescription:string;

}

@Component({
  selector: 'app-soundbytes',
  templateUrl: './soundbytes.page.html',
  styleUrls: ['./soundbytes.page.scss'],
})

export class SoundbytesPage  {
  
  files: Observable<Track[]>;

  private ngFirestoreCollection: AngularFirestoreCollection<Track>;
  
    @ViewChildren('range') range: QueryList<IonRange>;

    activeTrack: Track = null;
    player: Howl = null;

    constructor(private angularFireStore: AngularFirestore){
      this.ngFirestoreCollection = angularFireStore.collection<Track>('soundbytesCollection');
      this.files = this.ngFirestoreCollection.valueChanges();
    }
  
    start(track: Track){
      if(this.player){
        this.player.stop(); 
      }
  
      this.player = new Howl({
        src: [track.filePath], 
        html5: true,
        onplay:  () => {
          track.isPlaying = true;
  
          this.activeTrack = track;
          this.updateProgress(track);
        },
      });
      this.player.play();
    }
    togglePlayer(pause:boolean, track:Track){
      if(this.activeTrack == null){
        this.start(track);
      }
      else if(this.activeTrack.filePath !== track.filePath){
        this.start(track);
      }
      track.isPlaying = !pause;
      if(pause){
        this.player.pause();
      }
      else{
        this.player.play();
      }
    }
  
    seek(track:Track){
      if(!track.isPlaying){
        return 0; 
      }
      if(this.activeTrack == null){
        this.start(track);
      }
      else if(this.activeTrack.filePath != track.filePath){
        this.start(track);
      }
  
      const rangeElement = this.range.find(element => element.name == track.filePath);
      const newValue = +rangeElement.value;
      const duration = this.player.duration();
      console.log(duration/60);
      this.player.seek(duration *(newValue/100));
    }
    updateProgress(track: Track){
      const seek = this.player.seek();
  
      
      track.progress = (seek/this.player.duration()) * 100 || 0;
      if(track.isPlaying && this.activeTrack.filePath == track.filePath){
        setTimeout(() => {
          this.updateProgress(track);
        }, 1000);
      }
  
   
  }
  
  }