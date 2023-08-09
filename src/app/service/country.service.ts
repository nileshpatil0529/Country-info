import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  private apiUrl = 'https://restcountries.com/v2/region/';
  country = new Subject<any>();

  constructor(private http: HttpClient) { }

  getCountries(region: string): Observable<any> {
    return this.http.get(this.apiUrl+region);
  }

  setCountry(country: any) {
    this.country.next(country);
  }

  getOneCountry() {
    return this.country;
  }
}
