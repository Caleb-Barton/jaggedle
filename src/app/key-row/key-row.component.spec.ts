import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyRowComponent } from './key-row.component';

describe('KeyRowComponent', () => {
  let component: KeyRowComponent;
  let fixture: ComponentFixture<KeyRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
