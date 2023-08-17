import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { regionReducer } from './utils/store/region/regions.reducer';
import { countryReducer } from './utils/store/country/country.reducer';
import { CountryEffects } from './utils/store/country/country.effect';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomSelectDirective } from './utils/directives/custom-select.directive';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountryComponent,
    CustomSelectDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({region: regionReducer, country: countryReducer}),
    EffectsModule.forRoot([CountryEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
