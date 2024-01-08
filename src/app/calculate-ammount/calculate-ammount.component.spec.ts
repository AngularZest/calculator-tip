import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAmmountComponent } from './calculate-ammount.component';

describe('CalculateAmmountComponent', () => {
  let component: CalculateAmmountComponent;
  let fixture: ComponentFixture<CalculateAmmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateAmmountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculateAmmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
