import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDescComponent } from './menu-desc.component';

describe('MenuDescComponent', () => {
  let component: MenuDescComponent;
  let fixture: ComponentFixture<MenuDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
