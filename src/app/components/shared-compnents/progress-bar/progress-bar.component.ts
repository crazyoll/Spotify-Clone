import { Component, Input } from '@angular/core';
import { PlayPauseSongService } from 'src/app/services/current-song/current-song.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() songDuration: number = 206;
  @Input() currentSongTime: number = 0;
  @Input() isTimerRunning: boolean = false;
  

  protected songDurationString!: string;
  protected currentSongTimeString: string = "0:00";

  constructor(private playPauseSongService:PlayPauseSongService) {
    setInterval(() => this.updateSongCurrentTime(), 1000);
    this.songDurationString = this.formatTime(this.songDuration);
  }

  ngOnInit(){
    this.playPauseSongService.get().subscribe(data => {
      this.isTimerRunning = data;
    });
  }

  updateSongCurrentTime() {
    if (!this.isTimerRunning) {
      return;
    }
    
    this.currentSongTime++;
    this.currentSongTimeString = this.formatTime(this.currentSongTime);

    if (this.currentSongTime >= this.songDuration) {
      this.isTimerRunning = false;
    }
  }

  setSongCurrentTime(time: number) {
    this.currentSongTime = time;
    this.currentSongTimeString = this.formatTime(this.currentSongTime);
  }

  formatTime(time: number): string {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    var secondsString;

    if (seconds < 10)
      secondsString = "0" + seconds.toString();
    else
      secondsString = seconds.toString();

    return minutes.toString() + ":" + secondsString;
  }
}
