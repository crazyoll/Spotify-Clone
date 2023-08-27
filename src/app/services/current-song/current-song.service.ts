import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayPauseSongService {
  private songState = new Subject<boolean>();
  constructor() { }

  set(data: boolean) {
    this.songState.next(data);
  }

  get() {
    return this.songState.asObservable();
  }
}
