import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { HttpService } from 'src/app/shared/helpers/http.service';
import { LoadAudioAction } from 'src/app/shared/store/tetris.actions';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  constructor(private audioHelper: HttpService, private store: Store) { }

  ngOnInit(): void {
    this.loadAudio();
  }

  loadAudio(): void {
    this.audioHelper.loadAsync().pipe(
      tap((buffer) => {
        this.store.dispatch(LoadAudioAction({ buffer, context: this.audioHelper.context }));
      }),
    )
    .subscribe();
  }
}
