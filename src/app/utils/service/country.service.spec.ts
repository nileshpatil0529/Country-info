import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService]
    });

    service = TestBed.inject(CountryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve countries by region', () => {
    const mockRegion = 'europe';
    const mockResponse = [{ name: 'Country 1' }, { name: 'Country 2' }];

    service.getCountries(mockRegion).subscribe((countries) => {
      expect(countries).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${service.apiUrl}${mockRegion}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should set and retrieve a country', () => {
    const mockCountry = { name: 'Mock Country' };

    service.setCountry(mockCountry);
    service.getOneCountry().subscribe((country) => {
      expect(country).toEqual(mockCountry);
    });
  });
});
