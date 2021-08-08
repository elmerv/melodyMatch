import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

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
