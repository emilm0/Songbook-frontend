import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logger/logout/logout.component';
import { LoginComponent } from './logger/login/login.component';
import { WelcomeComponent } from './logger/welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouteGuardService } from './logger/route-guard.service';
import { SongListComponent } from './songs/components/song-list/song-list.component';
import { SongDetailsComponent } from './songs/components/song-details/song-details.component';
import { CreateSongComponent } from './songs/components/create-song/create-song.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'welcome', component: WelcomeComponent, canActivate: [RouteGuardService]},
  { path: 'songs', component: SongListComponent },
  { path: 'song/:id', component: SongDetailsComponent },
  { path: 'new-song', component: CreateSongComponent,
  //  canActivate: [RouteGuardService] 
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
