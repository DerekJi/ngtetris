import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AudioService } from 'src/app/shared/helpers/audio.service';
import { initialTetrisState } from 'src/app/shared/store/initial-state';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let mockStore: MockStore<{}>;
  let audioService: AudioService;

  beforeEach(async () => {
    let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    audioService = new AudioService(httpClientSpy);

    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
      providers: [
        { provide: AudioService, useValue: audioService },
        provideMockStore({ initialState: initialTetrisState }),
      ]
    })
    .compileComponents();
    mockStore = TestBed.inject(MockStore);    

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
