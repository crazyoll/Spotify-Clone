import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMusicMenuComponent } from './play-music-menu.component';

describe('PlayMusicMenuComponent', () => {
  let component: PlayMusicMenuComponent;
  let fixture: ComponentFixture<PlayMusicMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayMusicMenuComponent]
    });
    fixture = TestBed.createComponent(PlayMusicMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
