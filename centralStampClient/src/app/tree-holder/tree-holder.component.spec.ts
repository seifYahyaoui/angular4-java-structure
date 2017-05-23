import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeHolderComponent } from './tree-holder.component';

describe('TreeHolderComponent', () => {
  let component: TreeHolderComponent;
  let fixture: ComponentFixture<TreeHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
