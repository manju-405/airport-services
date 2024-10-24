import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { PageTitleComponent } from './page-title/page-title.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductBannerComponent } from './product-banner/product-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    PageTitleComponent,
    ProductCardComponent,
    ProductBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
