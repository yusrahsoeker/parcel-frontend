import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountingComponent } from './update-accounting.component';

describe('UpdateAccountingComponent', () => {
  let component: UpdateAccountingComponent;
  let fixture: ComponentFixture<UpdateAccountingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAccountingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
