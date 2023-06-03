import { Injectable } from '@nestjs/common';

import IQuote from './Interface/IQuote';
import IError from './Interface/IError';
import quotes from './db';

@Injectable()
export class AppService {
  getQuote(): IQuote {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  getAllQuotes(): IQuote[] {
    return quotes;
  }

  getIdQuote(id: number): IQuote | IError {
    const quote = quotes.find((item) => item.id === id);
    if (quote) {
      return quote;
    } else {
      return { code: 1, title: 'Цитаты с данным id не существует.' };
    }
  }
}
