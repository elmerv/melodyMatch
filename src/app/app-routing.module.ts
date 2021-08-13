import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search1',
    loadChildren: () => import('./search1/search1.module').then( m => m.Search1PageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'music-uploader',
    loadChildren: () => import('./music-uploader/music-uploader.module').then( m => m.MusicUploaderPageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path:'tab2', 
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)

  },
  {
    path: 'userprofile',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'soundbytes',
    loadChildren: () => import('./soundbytes/soundbytes.module').then( m => m.SoundbytesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
