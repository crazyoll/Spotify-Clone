import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() minValue: number = 0;
  @Input() maxValue: number = 100;
  @Output() currentValue: number = this.minValue;

  changeValue(event: Event){
    this.currentValue = (event.target as HTMLInputElement).valueAsNumber;
  }
}
