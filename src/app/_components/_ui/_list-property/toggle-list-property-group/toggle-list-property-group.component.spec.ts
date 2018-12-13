import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleListPropertyGroupComponent } from './toggle-list-property-group.component';

describe('ToggleListPropertyGroupComponent', () => {
  let component: ToggleListPropertyGroupComponent;
  let fixture: ComponentFixture<ToggleListPropertyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleListPropertyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleListPropertyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
