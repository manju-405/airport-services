import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.scss'
})
export class ProductBannerComponent {
  @Input() bannerHeader: any;
  @Input() bannerData: any;
}
