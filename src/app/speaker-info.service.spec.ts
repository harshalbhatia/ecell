/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SpeakerInfoService } from './speaker-info.service';

describe('SpeakerInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeakerInfoService]
    });
  });

  it('should ...', inject([SpeakerInfoService], (service: SpeakerInfoService) => {
    expect(service).toBeTruthy();
  }));
});
