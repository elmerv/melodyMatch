import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.page.html',
  styleUrls: ['./search1.page.scss'],
})
export class Search1Page implements OnInit {

  @ViewChild('search',{static: false}) search: IonSearchbar;
  public list: Array<object> = [];
  private searchedItem: any;

  
 constructor() { 
   this.list = [
     {title: "vocalist"},
     {title: "Drummer"},
     {title: "Dj"},
     {title: "Guaitarist"},
   ];
   this.searchedItem = this.list
 }

 ngOnInit() {}

   ionViewDidEnter(){
   setTimeout(()=> {
     this.search.setFocus();
   });
}
_ionChange(event){
 const val = event.target.value;
 this.searchedItem = this.list;
     if(val && val.trim() != ''){
       this.searchedItem = this.searchedItem.filter((item: any) => {
         return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
       })
    }
  }
}