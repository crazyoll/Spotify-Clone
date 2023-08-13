import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { PlayMusicMenuComponent } from './play-music-menu/play-music-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { SliderComponent } from './shared-compnents/slider/slider.component';
import { ProgressBarComponent } from './shared-compnents/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    PlayMusicMenuComponent,
    TopMenuComponent,
    ListMenuComponent,
    SliderComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
