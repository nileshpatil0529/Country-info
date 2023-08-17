import { createAction, props } from '@ngrx/store';

export const loadCountries = createAction('[Country] Load Countries', props<{ region: string }>());
export const loadCountriesSuccess = createAction('[Country] Load Countries Success', props<{ countries: any[] }>());
