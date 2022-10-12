import { HttpClient } from "@angular/common/http";
import { catchError, of } from "rxjs";
import { AudioService } from "./audio.service";

describe('AudioService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: AudioService;
  let httpResponse: ArrayBuffer = new ArrayBuffer(200);

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AudioService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('loadAsync() should return null, since the fake response is not audio', () => {
    // arrange
    httpClientSpy.get.and.returnValue(of(httpResponse));

    // act & assert
    service.loadAsync().pipe(
      catchError((err) => of(null))
    )
    .subscribe((buf) => {
      expect(buf).toBeFalsy();
    });
  });
});