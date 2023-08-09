import { createReducer, on } from '@ngrx/store';
import { loadRegionsSuccess, loadCountriesSuccess } from './regions.actions';

export interface RegionState {
    regions: string[];
    countries: any[];
}

export const initialState: RegionState = {
    regions: ['Europe', 'Asia'],
    countries: [{ "name": "Åland Islands", "topLevelDomain": [".ax"], "alpha2Code": "AX", "alpha3Code": "ALA", "callingCodes": ["358"], "capital": "Mariehamn", "altSpellings": ["AX", "Aaland", "Aland", "Ahvenanmaa"], "subregion": "Northern Europe", "region": "Europe", "population": 28875, "latlng": [60.116667, 19.9], "demonym": "Ålandish", "area": 1580.0, "timezones": ["UTC+02:00"], "nativeName": "Åland", "numericCode": "248", "flags": { "svg": "https://flagcdn.com/ax.svg", "png": "https://flagcdn.com/w320/ax.png" }, "currencies": [{ "code": "EUR", "name": "Euro", "symbol": "€" }], "languages": [{ "iso639_1": "sv", "iso639_2": "swe", "name": "Swedish", "nativeName": "svenska" }], "translations": { "br": "Åland", "pt": "Ilhas de Aland", "nl": "Ålandeilanden", "hr": "Ålandski otoci", "fa": "جزایر الند", "de": "Åland", "es": "Alandia", "fr": "Åland", "ja": "オーランド諸島", "it": "Isole Aland", "hu": "Åland-szigetek" }, "flag": "https://flagcdn.com/ax.svg", "regionalBlocs": [{ "acronym": "EU", "name": "European Union" }], "independent": false }],
};

export const regionReducer = createReducer(
    initialState,
    on(loadRegionsSuccess, (state, { regions }) => ({ ...state, regions })),
    on(loadCountriesSuccess, (state, { countries }) => ({ ...state, countries }))
);
