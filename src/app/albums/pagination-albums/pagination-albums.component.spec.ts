import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAlbumsComponent } from './pagination-albums.component';

describe('PaginationAlbumsComponent', () => {
  let component: PaginationAlbumsComponent;
  let fixture: ComponentFixture<PaginationAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
