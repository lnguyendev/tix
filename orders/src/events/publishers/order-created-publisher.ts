import { Publisher, OrderCreatedEvent, Subjects } from '@lnguyendevorg/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
