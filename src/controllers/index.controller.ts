import { Controller, Get, Render } from '@nestjs/common';

@Controller('index')
export class IndexController {
  @Get()
  @Render('index')
  renderIndex() {
    return { title: 'NestJS Interface API'};
  }
}
