import { Component, OnInit, ViewChild, QueryList,ViewChildren } from '@angular/core';
import keys from '../profileinfo/profileInfo';
import { Howl } from 'howler';
import { ParseSourceSpan } from '@angular/compiler';
import { IonRange } from '@ionic/angular';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Track {
  name: string;
  filePath: string;
  isPlaying: boolean;
  progress: number;
  audioTitle:string;
  audioDescription:string;
}




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  files: Observable<Track[]>;

  private ngFirestoreCollection: AngularFirestoreCollection<Track>;

@ViewChildren('range') range: QueryList<IonRange>;

  // playList: Track[] = [
  //   {
  //     name: 'This Is For The Lover In You',
  //     path: '../../assets/music/Shalamar - This Is For The Lover In You.mp3', 
  //     isPlaying: false, 
  //     progress: 0
  //   },
  //   {
  //     name: 'Dazz Band - Let It Whip',
  //     path: '../../assets/music/Dazz Band - Let It Whip (Extended).mp3', 
  //     isPlaying: false, 
  //     progress: 0
  //   },
  //   {
  //     name: 'Brick',
  //     path: '../../assets/music/Brick (70s Classics) (Extended).mp3', 
  //     isPlaying: false, 
  //     progress: 0
  //   },
  //   {
  //     name: 'Stayin Alive',
  //     path: "../../assets/music/Bee Gee's - Stayin Alive (70s Classics) (Radio Edit).mp3", 
  //     isPlaying: false, 
  //     progress: 0
  //   },
  //   {
  //     name: "Al Green - Let's Stay Together",
  //     path: "../../assets/music/Al Green - Let's Stay Together (70s Classics) (Clean) (Extended).mp3", 
  //     isPlaying: false, 
  //     progress: 0
  //   }
  // ];

  activeTrack: Track = null;
  player: Howl = null;

 artist: any[] = keys.key3;

  constructor(private angularFireStore: AngularFirestore ) {
    this.ngFirestoreCollection = angularFireStore.collection<Track>('filesCollection');
    this.files = this.ngFirestoreCollection.valueChanges();

   }

start (track: Track){
 if(this.player){
   this.player.stop();
 }
 this.player = new Howl({
   src: [track.filePath],
   html5: true,
   onplay: () => {
     track.isPlaying = true;
     this.activeTrack = track;
     this.updateProgress(track);
   },
 });
 this.player.play();
}

togglePlayer(pause:Boolean, track:Track){ 
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
if (!track.isPlaying){
  return 0;
}
if (this.activeTrack == null){
  this.start(track);
}
else if(this.activeTrack.filePath != track.filePath){
  this.start(track);
}
const rangeElement = this.range.find(element => element.name === track.filePath);
const newValue = +rangeElement.value
const duration = this.player.duration();
this.player.seek(duration *(newValue/100));
}

updateProgress(track: Track){
const seek = this.player.seek();
track.progress = (seek/this.player.duration()) *100 || 0;
if(track.isPlaying && this.activeTrack.filePath === track.filePath){
  setTimeout(() => {
    this.updateProgress(track);

  }, 1000);
}

}
  ngOnInit() {
  }

 
}

