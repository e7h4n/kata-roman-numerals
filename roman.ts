const ROMAN_LETTERS = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];

const LETTER_ORDINAL = ROMAN_LETTERS.map(x => x[1]).reduce((memo, curr, index) => {
    memo[curr] = index;
    return memo;
}, {});

export function digitalToRoman(digital: number) {
    let result = '';

    ROMAN_LETTERS.forEach(([base, letter]) => {
        while (digital >= base) {
            result += letter;
            digital -= base as number;
        }
    });

    return result;
}

export function romanToDigital(roman: string) {
    let result = 0;

    for (let i = 0; i < roman.length - 1; i++) {
        let num = getDigitalFromRomanChar(roman[i]);

        let positive = isPositiveRomanChar(roman[i], roman[i + 1]);
        if (!positive) {
            num = 0 - num;
        }

        result += num;
    }

    result += getDigitalFromRomanChar(roman[roman.length - 1]);

    return result;
}

function getDigitalFromRomanChar(romanChar: string) {
    const index = LETTER_ORDINAL[romanChar];
    return ROMAN_LETTERS[index][0] as number;
}

function isPositiveRomanChar(currentChar: string, nextChar: string) {
    return LETTER_ORDINAL[currentChar] <= LETTER_ORDINAL[nextChar];
}
