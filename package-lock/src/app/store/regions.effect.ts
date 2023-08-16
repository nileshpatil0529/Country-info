import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as RegionActions from './regions.actions';
import { CountryService } from '../service/country.service';

@Injectable()
export class RegionEffects {

    constructor(private actions$: Actions, private countriesService: CountryService) {}

    loadCountries$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RegionActions.loadCountries),
            mergeMap((action) =>
                this.countriesService.getCountries(action.region).pipe(
                    map((countries) => RegionActions.loadCountriesSuccess({ countries }))
                )
            )
        )
    );
}
