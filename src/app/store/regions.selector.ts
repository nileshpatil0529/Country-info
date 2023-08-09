import { createFeatureSelector, createSelector } from "@ngrx/store";


const getRegionState = createFeatureSelector<any>('region');

export const getRegions = createSelector(getRegionState, (state) => {
    return state;
});