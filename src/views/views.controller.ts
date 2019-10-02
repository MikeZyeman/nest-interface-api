import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class ViewsController {
  @Get()
  @Render('index')
  renderIndex() {
    return { title: 'NestJS Interface API'};
  }

  @Render('products')
  render() {
    return { }
  }
}
