import { it, expect, describe } from 'vitest';
import moneyFormat from './money';

describe('moneyFormat', () => {
    it('formats 1999 cents as $19.99', () => {
        expect(moneyFormat(1999)).toBe('$19.99');
    });

    it('displays 2 decimals', () => {
        expect(moneyFormat(1090)).toBe('$10.90');
        expect(moneyFormat(100)).toBe('$1.00');
    });
});
