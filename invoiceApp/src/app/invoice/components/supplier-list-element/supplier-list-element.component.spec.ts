import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierListElementComponent } from './supplier-list-element.component';

describe('SupplierListElementComponent', () => {
  let component: SupplierListElementComponent;
  let fixture: ComponentFixture<SupplierListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupplierListElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
