import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPauseButtonComponent } from './play-pause-button.component';

describe('PlayPauseButtonComponent', () => {
  let component: PlayPauseButtonComponent;
  let fixture: ComponentFixture<PlayPauseButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayPauseButtonComponent]
    });
    fixture = TestBed.createComponent(PlayPauseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
