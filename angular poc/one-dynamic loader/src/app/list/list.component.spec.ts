import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponents } from './list.component';

describe('ListComponents', () => {
  let component: ListComponents;
  let fixture: ComponentFixture<ListComponents>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponents ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
