import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPostComponent } from './admin-view-post.component';

describe('AdminViewPostComponent', () => {
  let component: AdminViewPostComponent;
  let fixture: ComponentFixture<AdminViewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminViewPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
