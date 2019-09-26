import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { IndexController } from './controllers/index.controller';

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    IndexController,
  ],
  providers: [AppService],
})
export class AppModule {}
