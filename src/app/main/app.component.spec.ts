import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountryComponent } from '../country/country.component';
import { CountryService } from '../utils/service/country.service';
import { HttpClientModule } from '@angular/common/http';
import { RegionComponent } from '../region/region.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CountryComponent, RegionComponent],
      imports: [FormsModule, HttpClientModule, StoreModule.forRoot({})],
      providers: [
        {
          provide: CountryService,
          useValue: {},
        },
      ],
    }).compileComponents();
  
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
