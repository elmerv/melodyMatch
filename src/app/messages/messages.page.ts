import { Component, OnInit } from '@angular/core';
import keys from '../profileinfo/profileInfo';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  
  artist: any[] = keys.key3;


  blogs : string[] = [];
  currentInput = "";
  
  constructor() {}

  addBlog(){
    this.blogs.push(this.currentInput);

    this.currentInput = "";

  }
  ngOnInit(){

  }
}
