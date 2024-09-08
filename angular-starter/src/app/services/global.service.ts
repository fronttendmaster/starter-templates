import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private covidDataUrl = 'assets/template.csv';

  constructor(private _http: HttpClient) {}

  getInfo() {
    return this._http.get(this.covidDataUrl, { responseType: 'text' });
  }
}
