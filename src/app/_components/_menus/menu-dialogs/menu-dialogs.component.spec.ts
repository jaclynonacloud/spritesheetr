import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDialogsComponent } from './menu-dialogs.component';

describe('MenuDialogsComponent', () => {
  let component: MenuDialogsComponent;
  let fixture: ComponentFixture<MenuDialogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDialogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
