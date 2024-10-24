import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'airport-services';
  productData: any
  constructor(
    private dataService: DataService
  ) {
  }
  ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.productData = data;
    })
  }

  getCardDetails(event: any) {
    console.log(event);
  }
}
