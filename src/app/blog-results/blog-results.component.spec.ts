import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogResultsComponent } from './blog-results.component';

describe('BlogResultsComponent', () => {
  let component: BlogResultsComponent;
  let fixture: ComponentFixture<BlogResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
