import { Controller, Get, Post } from '@nestjs/common';
import { Product } from './product.model';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly prodService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    return this.prodService.findall();
  }

  @Post()
  createProduct(product: Product) {
    this.prodService.create(product);
  }
}
