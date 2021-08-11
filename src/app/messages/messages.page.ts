import { Component, OnInit } from '@angular/core';
import keys from '../profileinfo/profileInfo';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  
  
  artist: any[] = keys.key3;
ngOnInit(){

}

  blogs : string[] = [];
  currentInput;
  currentInput2;
  constructor() {}
  addBlog(){


  let finalBlog: any ={
    currentInput:this.currentInput,
   currentInput2:this.currentInput2
  }
 this.blogs.push(finalBlog);

 this.currentInput ="";
 this.currentInput2 = "";

}
}
