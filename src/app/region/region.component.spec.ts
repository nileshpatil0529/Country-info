import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { CountryService } from '../service/country.service';
import { loadCountries } from '../store/regions.actions';
import { RegionComponent } from './region.component';

describe('RegionComponent', () => {
  let component: RegionComponent;
  let fixture: ComponentFixture<RegionComponent>;
  let mockCountryService: jasmine.SpyObj<CountryService>;
  let mockStore: jasmine.SpyObj<Store>;

  const mockRegions = {
    regions: ['Region1', 'Region2'],
    countries: [{ name: 'Country1' }, { name: 'Country2' }]
  };

  beforeEach(async () => {
    mockCountryService = jasmine.createSpyObj('CountryService', ['setCountry']);
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);

    await TestBed.configureTestingModule({
      declarations: [RegionComponent],
      imports: [FormsModule],
      providers: [
        { provide: CountryService, useValue: mockCountryService },
        { provide: Store, useValue: mockStore }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionComponent);
    component = fixture.componentInstance;
    mockStore.select.and.returnValue(of(mockRegions));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load countries when region changes', () => {
    component.selectedRegion = 'Region1';
    component.onRegionChange();

    expect(mockStore.dispatch).toHaveBeenCalledWith(loadCountries({ region: 'Region1' }));
  });

  it('should set country when country changes', () => {
    component.selectedCountry = 'Country1';
    component.onCountryChange();

    expect(mockCountryService.setCountry).toHaveBeenCalledWith({ name: 'Country1' });
  });
});
