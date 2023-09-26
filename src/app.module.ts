import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StackService } from './stack/stack.service';
import { StackController } from './stack/stack.controller';

@Module({
  imports: [],
  controllers: [AppController, StackController],
  providers: [AppService, StackService],
})
export class AppModule {}
