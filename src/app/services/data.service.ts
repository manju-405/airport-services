import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'data/data.json';
  constructor(
    private httpClient: HttpClient
  ) { }
  getData() {
    return this.httpClient.get(this.url);
  }
}
