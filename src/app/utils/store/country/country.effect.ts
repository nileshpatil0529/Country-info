import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import * as CountryActions from './country.actions';
import { CountryService } from '../../service/country.service';

@Injectable()
export class CountryEffects {
  constructor(
    private actions$: Actions,
    private countriesService: CountryService
  ) {}

  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CountryActions.loadCountries),
      mergeMap((action) =>
        this.countriesService
          .getCountries(action.region)
          .pipe(
            map((countries) =>
              CountryActions.loadCountriesSuccess({ countries })
            )
          )
      )
    )
  );
}
