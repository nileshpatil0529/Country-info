import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegionComponent } from './region/region.component';
import { CountryComponent } from './country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { regionReducer } from './store/regions.reducer';
import { RegionEffects } from './store/regions.effect';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
