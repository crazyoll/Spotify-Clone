import { Component } from '@angular/core';

@Component({
  selector: 'app-play-pause-button',
  templateUrl: './play-pause-button.component.html',
  styleUrls: ['./play-pause-button.component.scss']
})
export class PlayPauseButtonComponent {
  protected readonly playStopButton = "assets/Pause.svg";
}
