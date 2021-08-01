import { Component, OnInit } from '@angular/core';
import artist from '../profileinfo/profileInfo';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 artist: any[] = artist;

  constructor() { }

  ngOnInit() {
  }

 
}

