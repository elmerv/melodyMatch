import { Component, OnInit } from '@angular/core';
import artist from '../profileinfo/profileInfo';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  artist: any[] = artist;
  constructor() { }

  ngOnInit() {
  }

}
