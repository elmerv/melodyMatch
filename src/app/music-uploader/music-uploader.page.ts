import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface FILE {
  name: string;
  filePath: string;
  size: number;
  audioTitle:string;
  audioDescription:string;
  isPlaying:boolean;
  progress: number;
}

@Component({
  selector: 'app-music-uploader',
  templateUrl: './music-uploader.page.html',
  styleUrls: ['./music-uploader.page.scss'],
})
export class MusicUploaderPage implements OnInit {

  ngFireUploadTask: AngularFireUploadTask;

  progressNum: Observable<number>;

  progressSnapshot: Observable<any>;

  fileUploadedPath: Observable<string>;

  files: Observable<FILE[]>;

  FileName: string;
  FileSize: number;

  isAudioUploading: boolean;
  isAuidoUploaded: boolean;

  audioTitle:string;
  audioDescription:string;
  
  private ngFirestoreCollection: AngularFirestoreCollection<FILE>;

  constructor( private angularFirestore: AngularFirestore,
    private angularFireStorage: AngularFireStorage) {
      this.isAudioUploading = false;
      this.isAuidoUploaded = false;

      this.ngFirestoreCollection = angularFirestore.collection<FILE>('filesCollection');
      this.files = this.ngFirestoreCollection.valueChanges();
     }
     fileUpload(event: FileList){
       const file = event.item(0);
       this.isAudioUploading = true;
       this.isAuidoUploaded = false;

       this.FileName = file.name;

       const fileStoragePath = `filesStorage/${new Date().getTime()}_${file.name}`;

       const audioRef = this.angularFireStorage.ref(fileStoragePath);

       this.ngFireUploadTask = this.angularFireStorage.upload(fileStoragePath, file);
       this.progressNum = this.ngFireUploadTask.percentageChanges();

       this.progressSnapshot = this.ngFireUploadTask.snapshotChanges().pipe(
        
        finalize(() => {
          this.fileUploadedPath = audioRef.getDownloadURL();
          
          this.fileUploadedPath.subscribe(resp=>{
            this.fileStorage({
              name: file.name,
              filePath: resp,
              size: this.FileSize,
              audioTitle:this.audioTitle,
              audioDescription:this.audioDescription,
              isPlaying: false,
              progress:0
            });
            this.isAudioUploading = false;
            this.isAuidoUploaded = true;
          },error => {
            console.log(error);
          })
        }),
        tap(snap => {
            this.FileSize = snap.totalBytes;
        })
      )

      
  }
  fileStorage(audio: FILE) {
    const AudioId = this.angularFirestore.createId();
    
    this.ngFirestoreCollection.doc(AudioId).set(audio).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
}  
     

  ngOnInit() {
  }

}
