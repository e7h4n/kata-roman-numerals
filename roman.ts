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

const LETTER_INDEXES = ROMAN_LETTERS.map(x => x[1]).reduce((memo, curr, index) => {
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
    for (let i = 0; i < roman.length; i++) {
        const currentIndex = LETTER_INDEXES[roman[i]];
        const nextIndex = i === roman.length - 1 ? ROMAN_LETTERS.length : LETTER_INDEXES[roman[i+1]];
        let num = ROMAN_LETTERS[currentIndex][0] as number;
        if (currentIndex > nextIndex) {
            num = 0 - num;
        }

        result += num;
    }

    return result;
}
