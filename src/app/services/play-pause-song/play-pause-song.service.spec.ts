import { TestBed } from '@angular/core/testing';

import { PlayPauseSongService } from './play-pause-song.service';

describe('PlayPauseSongService', () => {
  let service: PlayPauseSongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayPauseSongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
