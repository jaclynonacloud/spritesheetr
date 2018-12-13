import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPropertyItemComponent } from './list-property-item.component';

describe('ListPropertyItemComponent', () => {
  let component: ListPropertyItemComponent;
  let fixture: ComponentFixture<ListPropertyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropertyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPropertyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
