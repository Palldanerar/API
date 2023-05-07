import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getQuote(): string {
    return 'Если тебе тяжело, значит ты поднимаешься в гору. Если тебе легко, значит ты летишь в пропасть.';
  }
}
