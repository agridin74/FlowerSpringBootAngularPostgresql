import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlowersComponent } from './search-flowers.component';

describe('SearchFlowersComponent', () => {
  let component: SearchFlowersComponent;
  let fixture: ComponentFixture<SearchFlowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
