import { createReducer, on } from '@ngrx/store';
import { loadRegionsSuccess, loadCountriesSuccess } from './regions.actions';

export interface RegionState {
    regions: string[];
    countries: any[];
}

export const initialState: RegionState = {
    regions: ['Europe', 'Asia'],
    countries: [],
};

export const regionReducer = createReducer(
    initialState,
    on(loadRegionsSuccess, (state, { regions }) => ({ ...state, regions })),
    on(loadCountriesSuccess, (state, { countries }) => ({ ...state, countries }))
);
