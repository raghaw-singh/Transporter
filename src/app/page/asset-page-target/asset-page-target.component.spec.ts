import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPageTargetComponent } from './asset-page-target.component';

describe('AssetPageTargetComponent', () => {
  let component: AssetPageTargetComponent;
  let fixture: ComponentFixture<AssetPageTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPageTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPageTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
