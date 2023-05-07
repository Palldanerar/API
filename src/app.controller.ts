import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import IQuote from './interface';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/quote')
  getQuote(): IQuote {
    return this.appService.getQuote();
  }
}
