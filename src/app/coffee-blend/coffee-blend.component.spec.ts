import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeBlendComponent } from './coffee-blend.component';

describe('CoffeeBlendComponent', () => {
  let component: CoffeeBlendComponent;
  let fixture: ComponentFixture<CoffeeBlendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeBlendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeBlendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
