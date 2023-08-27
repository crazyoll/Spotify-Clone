import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  protected readonly homeIcon = "assets/Home.svg";
  protected readonly searchIcon = "assets/Search.svg";
  protected readonly libaryIcon = "assets/YourLibrary.svg";
  protected readonly createPlaylistIcon = "assets/CreatePlaylist.svg";
  protected readonly likedSongsIcon = "assets/Like.svg";
  protected readonly addIcon = "images/pobrane.jpg";
}
