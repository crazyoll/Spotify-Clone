import { Component } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {
  protected readonly leftArrowIcon = "assets/LeftArrow.svg";
  protected readonly rightArrowIcon = "assets/RightArrow.svg";
  protected readonly profileIcon = "assets/Profile.svg";
  protected readonly playlistHeaderImage = "images/playlist-cover.png";
  protected readonly spotifyLogo = "assets/spotify-logo.png"
}
