import { describe } from 'vitest';
import { generateStars } from '../stars';

/*
Check if
- There are offset-x and offset-y values in px
- Variable color is defined in a hsl value
*/
const boxShadowRegex = /^((\d+px\s+\d+px\s+hsl\(var\(--[\w-]+\)\))(,\s*)?)+$/;

describe('Star generator', () => {
  it('Return a css valid box-shadow', () => {
    const stars = generateStars(20, 1000, 1000);

    const isValid = boxShadowRegex.test(stars);

    expect(isValid).toBe(true);
  });

  it('Throws when a value is falsey', () => {
    expect(() => generateStars(0, -1, 0)).toThrow(
      TypeError('Container and stars count values must be defined')
    );
  });
});
