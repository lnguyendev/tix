import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from '@lnguyendevorg/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
