import { Component } from '@angular/core';

@Component({
  selector: 'app-play-pause-button',
  templateUrl: './play-pause-button.component.html',
  styleUrls: ['./play-pause-button.component.scss']
})
export class PlayPauseButtonComponent {
  
  private readonly stopButtonSprite = "assets/Pause.svg";
  private readonly playButtonSprite = "assets/Play.svg";

  protected isMusicPlaying: boolean = false;
  protected playStopButton = this.stopButtonSprite;


  PlayMusic() {
    if (this.isMusicPlaying) { 
      this.playStopButton = this.stopButtonSprite;
      this.isMusicPlaying = false;
    }
    else {
      this.playStopButton = this.playButtonSprite;
      this.isMusicPlaying = true;
    }
  }
}
