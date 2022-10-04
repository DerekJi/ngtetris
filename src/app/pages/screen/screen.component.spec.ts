import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/shared/store/initial-state';

import { ScreenComponent } from './screen.component';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;
  let mockStore: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenComponent ],      
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
