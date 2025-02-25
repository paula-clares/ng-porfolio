import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsButtonComponent } from './details-button.component';
import { DebugElement } from '@angular/core';

describe('DetailsButtonComponent', () => {
  let component: DetailsButtonComponent;
  let fixture: ComponentFixture<DetailsButtonComponent>;
  let debugElement: DebugElement;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    debugElement = fixture.debugElement;
    nativeElement = debugElement.nativeElement;
  });

  /* Component was created */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* Click goes to task details page */
  it('should go to details page', () => {
    spyOn(component, 'detailsTask');

    let button: HTMLAnchorElement | null = nativeElement.querySelector('button.task_details');

    button?.click();
    expect(component.detailsTask).toHaveBeenCalled();
  });
});
