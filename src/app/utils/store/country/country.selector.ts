import { createFeatureSelector, createSelector } from '@ngrx/store';

const getCountryState = createFeatureSelector<any>('country');

export const getCountries = createSelector(getCountryState, (state) => {
  return state;
});
