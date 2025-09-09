import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2aboutComponent } from './v2about.component';

describe('V2aboutComponent', () => {
  let component: V2aboutComponent;
  let fixture: ComponentFixture<V2aboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2aboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
