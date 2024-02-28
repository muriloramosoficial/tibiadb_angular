import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostablebossComponent } from './boostableboss.component';

describe('BoostablebossComponent', () => {
  let component: BoostablebossComponent;
  let fixture: ComponentFixture<BoostablebossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoostablebossComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoostablebossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
