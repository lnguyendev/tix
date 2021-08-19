import { Publisher, Subjects, TicketUpdatedEvent } from '@lnguyendevorg/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
