import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItempageComponent } from './itempage.component';

describe('ItempageComponent', () => {
  let component: ItempageComponent;
  let fixture: ComponentFixture<ItempageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItempageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItempageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
