import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetspagePage } from './petspage.page';

describe('PetspagePage', () => {
  let component: PetspagePage;
  let fixture: ComponentFixture<PetspagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PetspagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
