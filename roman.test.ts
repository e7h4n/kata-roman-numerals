import { digitalToRoman, romanToDigital } from './roman';

describe('digitalToRoman', () => {
    [
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [10, 'X'],
        [11, 'XI'],
        [14, 'XIV'],
        [15, 'XV'],
        [18, 'XVIII'],
        [20, 'XX'],
        [30, 'XXX'],
        [40, 'XL'],
        [50, 'L'],
        [60, 'LX'],
        [90, 'XC'],
        [100, 'C'],
        [99, 'XCIX'],
        [49, 'XLIX'],
        [369, 'CCCLXIX'],
        [500, 'D'],
        [400, 'CD'],
        [490, 'CDXC'],
        [440, 'CDXL'],
        [900, 'CM'],
        [1000, 'M'],
        [994, 'CMXCIV'],
        [2751, 'MMDCCLI'],
        [448, 'CDXLVIII'],
        [24, 'XXIV'],
    ].forEach(([digital, roman]) => {
        test(`should convert ${digital} to ${roman}`, () => {
            const result = digitalToRoman(digital as number);
            expect(result).toBe(roman);
        });
    });
});

describe('romanToDigital', () => {
    [
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [10, 'X'],
        [11, 'XI'],
        [14, 'XIV'],
        [15, 'XV'],
        [18, 'XVIII'],
        [20, 'XX'],
        [30, 'XXX'],
        [40, 'XL'],
        [50, 'L'],
        [60, 'LX'],
        [90, 'XC'],
        [100, 'C'],
        [99, 'XCIX'],
        [49, 'XLIX'],
        [369, 'CCCLXIX'],
        [500, 'D'],
        [400, 'CD'],
        [490, 'CDXC'],
        [440, 'CDXL'],
        [900, 'CM'],
        [1000, 'M'],
        [994, 'CMXCIV'],
        [2751, 'MMDCCLI'],
        [448, 'CDXLVIII'],
        [24, 'XXIV'],
    ].forEach(([digital, roman]) => {
        test(`should convert ${roman} to ${digital}`, () => {
            const result = romanToDigital(roman as string);
            expect(result).toBe(digital);
        });
    });
});
