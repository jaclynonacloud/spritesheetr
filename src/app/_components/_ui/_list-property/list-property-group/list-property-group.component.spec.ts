import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertyGroupComponent } from './list-property-group.component';

describe('ListPropertyGroupComponent', () => {
  let component: ListPropertyGroupComponent;
  let fixture: ComponentFixture<ListPropertyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropertyGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropertyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
