import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponentComponent } from './catalog-component.component';

describe('CatalogComponentComponent', () => {
  let component: CatalogComponentComponent;
  let fixture: ComponentFixture<CatalogComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
