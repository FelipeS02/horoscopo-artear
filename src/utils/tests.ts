import { ZodiacSign } from '@/models/zodiacSign';

export const mockSigns: ZodiacSign[] = [
  {
    id: 12,
    name: 'Leo',
    init_date: '24-07',
    end_date: '23-08',
    prediction:
      'Durante esta jornada, tendrá la posibilidad de conectarse con su entorno de un modo simple y profundo. No desperdicie la oportunidad que le deparará esta jornada.',
    image: 'leo.jpg',
  },
  {
    id: 19,
    name: 'Virgo',
    init_date: '24-08',
    end_date: '22-09',
    prediction:
      'Sepa que una mirada del pasado lo ayudará a solucionar esos inconvenientes del presente. No le tema a los recuerdos que ya ha vivido, son solo pasajeros.',
    image: 'virgo.jpg',
  },
];
