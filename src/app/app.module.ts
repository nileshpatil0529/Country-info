import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { regionReducer } from './store/regions.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RegionEffects } from './store/regions.effect';

@NgModule({
  declarations: [
    AppComponent,
    RegionComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({region: regionReducer}),
    EffectsModule.forRoot([RegionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
