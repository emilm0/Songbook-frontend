//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './anguar-material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './logger/login/login.component';
import { LogoutComponent } from './logger/logout/logout.component';
import { WelcomeComponent } from './logger/welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MessageComponent } from './message/message.component';
import { SongListComponent } from './songs/components/song-list/song-list.component';
import { SongDetailsComponent } from './songs/components/song-details/song-details.component';
import { LyricComponent } from './songs/components/lyric/lyric.component';
import { FormsModule } from '@angular/forms';
import { CreateSongComponent } from './songs/components/create-song/create-song.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    MessageComponent,
    SongListComponent,
    SongDetailsComponent,
    LyricComponent,
    CreateSongComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }, 
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
