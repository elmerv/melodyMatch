import { Component, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';
import artist from '../profileinfo/profileInfo';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  artist: any[] = artist;
  @ViewChild('search', {static: false}) search: IonSearchbar;
    public list: Array<object> = [];
    private searchedItem: any;

    constructor(){
      this.list = [
        {title: "Vocalist"},
        {title: "drummer"},
        {title: "guitarist"},
        {title: "Dj"},
      ];
      this.searchedItem = this.list
    }

    option = {
      slidesPerView:1.5
    }

     

  }
