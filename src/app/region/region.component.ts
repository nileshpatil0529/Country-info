import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CountryService } from '../utils/service/country.service';
import { loadCountries } from '../utils/store/country/country.actions';
import { getRegions } from '../utils/store/region/regions.selector';
import { getCountries } from '../utils/store/country/country.selector';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  regions$!: Observable<{ regions: string[]}>;
  countries$!: Observable<{ countries: any[] }>;
  countries: any[] = [];
  selectedRegion = '';
  selectedCountry: any;


  constructor(private countryService: CountryService, private store: Store<{ region: { regions: string[], countries: any[] } }>) { }

  ngOnInit(): void {
    this.regions$ = this.store.select(getRegions);
    this.countries$ = this.store.select(getCountries);
  }

  onRegionChange() {
    this.store.dispatch(loadCountries({ region: this.selectedRegion }));
  }

  onCountryChange() {
    let country: any;
    this.countries$?.subscribe(data => {
      country = data.countries.find(data => this.selectedCountry === data.name);
      this.countryService.setCountry(country);
    })
  }
}
