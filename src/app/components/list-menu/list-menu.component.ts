import { Component } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent {
  protected readonly pauseButton = "assets/Pause.svg";
  protected readonly likeSongButton = "assets/FiiledLike.svg";
  protected readonly downloadButton = "assets/Download.svg";
  protected readonly moreOptionsButton = "assets/ThreeDots.svg";
  protected readonly searchIcon = "assets/Search.svg";
  protected readonly songDurationIcon = "assets/Duration.svg";
  protected readonly exampleSongIcon = "images/playlist-cover.png";
}
