import { createReducer, on } from '@ngrx/store';
import { loadRegionsSuccess } from './regions.actions';

export interface RegionState {
    regions: string[];
}

export const initialState: RegionState = {
    regions: ['Europe', 'Asia'],
};

export const regionReducer = createReducer(
    initialState,
    on(loadRegionsSuccess, (state, { regions }) => ({ ...state, regions })),
);
