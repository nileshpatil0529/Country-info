import { createAction, props } from '@ngrx/store';

export const loadRegions = createAction('[Region] Load Regions');
export const loadRegionsSuccess = createAction('[Region] Load Regions Success', props<{ regions: string[] }>());
export const loadCountries = createAction('[Country] Load Countries', props<{ region: string }>());
export const loadCountriesSuccess = createAction('[Country] Load Countries Success', props<{ countries: any[] }>());
