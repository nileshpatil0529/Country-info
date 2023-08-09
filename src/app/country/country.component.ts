import { Component, OnInit } from '@angular/core';
import { CountryService } from '../service/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit{

  countryData: any = null;

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
    let countryObs = this.countryService.getOneCountry();
    
    countryObs.subscribe((value: any) => {
      this.countryData = value;
    });
  }

}
