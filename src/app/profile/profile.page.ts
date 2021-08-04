import { Component, OnInit } from '@angular/core';
import artist from '../profileinfo/profileInfo';
import { Howl } from 'howler';
import { ParseSourceSpan } from '@angular/compiler';
export interface Track {
  name: string;
  path: string;
  isPlaying: boolean;
  progress: number;
}




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  playList: Track[] = [
    {
      name: 'This Is For The Lover In You',
      path: '../../assets/music/Shalamar - This Is For The Lover In You.mp3', 
      isPlaying: false, 
      progress: 0
    },
    {
      name: 'Dazz Band - Let It Whip',
      path: '../../assets/music/Dazz Band - Let It Whip (Extended).mp3', 
      isPlaying: false, 
      progress: 0
    },
    {
      name: 'Brick',
      path: '../../assets/music/Brick (70s Classics) (Extended).mp3', 
      isPlaying: false, 
      progress: 0
    },
    {
      name: 'Stayin Alive',
      path: "../../assets/music/Bee Gee's - Stayin Alive (70s Classics) (Radio Edit).mp3", 
      isPlaying: false, 
      progress: 0
    },
    {
      name: "Al Green - Let's Stay Together",
      path: "../../assets/music/Al Green - Let's Stay Together (70s Classics) (Clean) (Extended).mp3", 
      isPlaying: false, 
      progress: 0
    }
  ];

  activeTrack: Track = null;
  player: Howl = null;

 artist: any[] = artist;

  constructor() { }

start (track: Track){
 if(this.player){
   this.player.stop();
 }
 this.player = new Howl({
   src: [track.path],
   onplay: () => {
     track.isPlaying = true;
     this.activeTrack = track;
   },
 });
 this.player.play();
}

togglePlayer(pause:Boolean, track:Track){ 
  if(this.activeTrack == null){
    this.start(track);
  }
  else if(this.activeTrack.name !== track.name){
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
seek(){

}

updateProgress(){


}
  ngOnInit() {
  }

 
}

