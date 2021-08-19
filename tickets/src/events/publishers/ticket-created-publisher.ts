import { Publisher, Subjects, TicketCreatedEvent } from '@lnguyendevorg/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
