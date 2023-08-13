import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Input() currentValue: number = this.minValue;
  @Output() changeCurrentValue  = new EventEmitter<number>;

  changeValue(event: Event){
    this.changeCurrentValue.emit((event.target as HTMLInputElement).valueAsNumber);
  }
}
