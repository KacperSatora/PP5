import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListElementComponentComponent } from './customer-list-element-component.component';

describe('CustomerListElementComponentComponent', () => {
  let component: CustomerListElementComponentComponent;
  let fixture: ComponentFixture<CustomerListElementComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListElementComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListElementComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
