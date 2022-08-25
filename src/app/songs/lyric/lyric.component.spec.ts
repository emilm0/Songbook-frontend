import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricComponent } from './lyric.component';

describe('LyricComponent', () => {
  let component: LyricComponent;
  let fixture: ComponentFixture<LyricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
