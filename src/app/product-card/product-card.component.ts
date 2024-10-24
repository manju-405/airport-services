import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() cardsData: any;
  @Input() cardsTitle: any;
  @Output() cardDetails:EventEmitter<any> = new EventEmitter();

  onClick(event: any) {
    this.cardDetails.emit(event);
  }
}
