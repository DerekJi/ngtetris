import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialTetrisState } from 'src/app/shared/store/initial-state';

import { MachineComponent } from './machine.component';

describe('MachineComponent', () => {
  let component: MachineComponent;
  let fixture: ComponentFixture<MachineComponent>;
  let mockStore: MockStore<{}>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MachineComponent ],
      imports: [
        HttpClientModule,
      ],
      providers: [
        provideMockStore({ initialState: initialTetrisState }),
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);

    fixture = TestBed.createComponent(MachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
