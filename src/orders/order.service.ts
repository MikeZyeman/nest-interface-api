import { Injectable } from '@nestjs/common';
import { Order } from './order.model';

@Injectable()
export class OrderService {
  private readonly orders: Order[] = [];

  create(order: Order) {
    this.orders.push(order);
  }

  findall(): Order[] {
    return this.orders;
  }
}
