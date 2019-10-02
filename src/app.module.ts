import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ViewsController } from './views/views.controller';

import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    UserModule,
  ],
  controllers: [
    AppController,
    ViewsController,
  ],
  providers: [AppService],
})
export class AppModule {}
