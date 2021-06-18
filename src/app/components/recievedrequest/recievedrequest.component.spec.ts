import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedrequestComponent } from './recievedrequest.component';

describe('RecievedrequestComponent', () => {
  let component: RecievedrequestComponent;
  let fixture: ComponentFixture<RecievedrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecievedrequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
