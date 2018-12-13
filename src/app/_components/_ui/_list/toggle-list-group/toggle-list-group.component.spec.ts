import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleListGroupComponent } from './toggle-list-group.component';

describe('ToggleListGroupComponent', () => {
  let component: ToggleListGroupComponent;
  let fixture: ComponentFixture<ToggleListGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleListGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
