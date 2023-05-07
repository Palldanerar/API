import { Injectable } from '@nestjs/common';

import IQuote from './interface';
import quotes from './db';

@Injectable()
export class AppService {
  getQuote(): IQuote {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  getAllQuotes(): IQuote[] {
    return quotes;
  }

  getIdQuote(id: number): IQuote {
    return quotes.find((item) => item.id === id);
  }
}
