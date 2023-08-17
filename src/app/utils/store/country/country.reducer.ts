import { createReducer, on } from '@ngrx/store';
import { loadCountriesSuccess } from './country.actions';

export interface CountryState {
  countries: any[];
}

export const initialState: CountryState = {
  countries: [],
};

export const countryReducer = createReducer(
  initialState,
  on(loadCountriesSuccess, (state, { countries }) => ({ ...state, countries }))
);
