import { ComponentFixture, TestBed } from '@angular/core/testing';

import { V2homeComponent } from './v2home.component';

describe('V2homeComponent', () => {
  let component: V2homeComponent;
  let fixture: ComponentFixture<V2homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [V2homeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(V2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
