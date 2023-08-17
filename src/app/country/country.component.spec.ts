import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryComponent } from './country.component';
import { CountryService } from '../utils/service/country.service';
import { of } from 'rxjs';

describe('CountryComponent', () => {
  let component: CountryComponent;
  let fixture: ComponentFixture<CountryComponent>;
  let mockCountryService: jasmine.SpyObj<CountryService>;

  beforeEach(() => {
    const countryServiceSpy = jasmine.createSpyObj('CountryService', ['getOneCountry']);

    TestBed.configureTestingModule({
      declarations: [CountryComponent],
      providers: [{ provide: CountryService, useValue: countryServiceSpy }],
    });

    fixture = TestBed.createComponent(CountryComponent);
    component = fixture.componentInstance;
    mockCountryService = TestBed.inject(CountryService) as jasmine.SpyObj<CountryService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set countryData when ngOnInit is called', () => {
    const mockCountryData = {};
    mockCountryService.getOneCountry.and.returnValue(of(mockCountryData));

    component.ngOnInit();

    expect(component.countryData).toEqual(mockCountryData);
  });
});
