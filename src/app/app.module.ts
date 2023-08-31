import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { PlayMusicMenuComponent } from './components/play-music-menu/play-music-menu.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { ListMenuComponent } from './components/list-menu/list-menu.component';
import { SliderComponent } from './components/shared-compnents/slider/slider.component';
import { ProgressBarComponent } from './components/shared-compnents/progress-bar/progress-bar.component';
import { PlayPauseButtonComponent } from './components/shared-compnents/play-pause-button/play-pause-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    PlayMusicMenuComponent,
    TopMenuComponent,
    ListMenuComponent,
    SliderComponent,
    ProgressBarComponent,
    PlayPauseButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
