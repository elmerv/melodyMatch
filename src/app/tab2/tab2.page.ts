import { Component } from '@angular/core';
import keys from '../profileinfo/profileInfo';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  artist: any[] = keys.key3;
  ngOnInit() {
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
}}
