import { Injectable } from '@nestjs/common';

import IQuote from './Interface/IQuote';
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
