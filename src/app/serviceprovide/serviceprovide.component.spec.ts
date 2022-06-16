import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovideComponent } from './serviceprovide.component';

describe('ServiceprovideComponent', () => {
  let component: ServiceprovideComponent;
  let fixture: ComponentFixture<ServiceprovideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceprovideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceprovideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
