import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-play-music-menu',
  templateUrl: './play-music-menu.component.html',
  styleUrls: ['./play-music-menu.component.scss']
})
export class PlayMusicMenuComponent {
  protected readonly likeButton = "assets/FiiledLike.svg";
  protected readonly shuffleButton = "assets/Shuffle.svg";
  protected readonly previousSongButton = "assets/Previous.svg";

  protected readonly nextSongButton = "assets/Next.svg";
  protected readonly loopSongButton = "assets/Repeat.svg";
  protected readonly songProgressBar = "assets/.svg";
  protected readonly karaokeButton = "assets/Lyrics.svg";
  protected readonly queueButton = "assets/Queue.svg";
  protected readonly listenFromAnotherDeviceButton = "assets/Connect to a device.svg";
  protected readonly muteButton = "assets/Volume.svg";
}
