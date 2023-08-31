import { Component } from '@angular/core';
import { PlayPauseSongService } from 'src/app/services/current-song/current-song.service';
import { SpotifyService } from 'src/app/services/spotify/spotify.service';

@Component({
  selector: 'app-play-pause-button',
  templateUrl: './play-pause-button.component.html',
  styleUrls: ['./play-pause-button.component.scss']
})
export class PlayPauseButtonComponent {

  private readonly stopButtonSprite = "assets/Pause.svg";
  private readonly playButtonSprite = "assets/Play.svg";

  protected isMusicPlaying: boolean = false;
  protected playStopButton = this.playButtonSprite;

  constructor(private playPauseSongService: PlayPauseSongService, private spotify:SpotifyService ) { }

  SongControl() {
    if (this.isMusicPlaying) {
      this.StopMusic();
    }
    else {
      this.PlayMusic();
    }
    this.playPauseSongService.set(this.isMusicPlaying);
  }

  StopMusic() {
    this.playStopButton = this.playButtonSprite;
    this.isMusicPlaying = false;
  }

  PlayMusic() {
    this.playStopButton = this.stopButtonSprite;
    this.isMusicPlaying = true;
  }
}
