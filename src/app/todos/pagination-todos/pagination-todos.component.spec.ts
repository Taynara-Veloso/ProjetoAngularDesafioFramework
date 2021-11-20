import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationTodosComponent } from './pagination-todos.component';

describe('PaginationTodosComponent', () => {
  let component: PaginationTodosComponent;
  let fixture: ComponentFixture<PaginationTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
