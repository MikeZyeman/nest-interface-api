import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {

  private readonly products: Product[] = [];

  create(product: Product) {
    this.products.push(product);
  }

  findall(): Product[] {
    return this.products;
  }
}
