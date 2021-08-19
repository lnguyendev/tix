import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@lnguyendevorg/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
