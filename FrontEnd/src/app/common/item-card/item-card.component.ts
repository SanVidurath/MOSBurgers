import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  imports: [CommonModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {
  @Input()
  public item:any;

  getImage(type:string):string {
    return this.imageMap[type.toLowerCase()];
  }

  imageMap:{[key:string]:string} = {
    'burger': 'assets/images/burger-3.jpg',
    'submarine': 'assets/images/submarine-2.png',
    'fries': 'assets/images/fries-2.png',
    'pasta': 'assets/images/pasta-2.png',
   'chicken': 'assets/images/chicken.png',
   'drinks': 'assets/images/beverages-2.png',
  }
}
