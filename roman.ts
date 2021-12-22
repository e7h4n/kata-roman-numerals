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
