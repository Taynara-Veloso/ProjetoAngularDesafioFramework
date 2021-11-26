import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAlbumComponent } from './formulario-album.component';

describe('FormularioAlbumComponent', () => {
  let component: FormularioAlbumComponent;
  let fixture: ComponentFixture<FormularioAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
