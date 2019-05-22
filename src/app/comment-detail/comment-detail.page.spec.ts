import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentDetailPage } from './comment-detail.page';

describe('CommentDetailPage', () => {
  let component: CommentDetailPage;
  let fixture: ComponentFixture<CommentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
