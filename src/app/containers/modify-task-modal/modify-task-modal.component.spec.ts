import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyTaskModalComponent } from './modify-task-modal.component';

describe('ModifyTaskModalComponent', () => {
  let component: ModifyTaskModalComponent;
  let fixture: ComponentFixture<ModifyTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyTaskModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
