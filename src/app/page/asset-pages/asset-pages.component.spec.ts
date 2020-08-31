import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPagesComponent } from './asset-pages.component';

describe('AssetPagesComponent', () => {
  let component: AssetPagesComponent;
  let fixture: ComponentFixture<AssetPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
