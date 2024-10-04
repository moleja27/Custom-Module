
export const reverseString = (a: string): { reversed: string; length: number } => {
    const reversed = a.split('').reverse().join('');
    return { reversed, length: reversed.length };
};

const result: { reversed: string; length: number } = reverseString("hola");
console.log(result.reversed);
console.log(result.length);


export const countCharacters = (str: string): number => {
    return str.length;
};

console.log(countCharacters("hola"));

export const leTras = (b: string): { mayuSculas: string; length: number } => {
    const mayuSculas = b.toUpperCase();
    return { mayuSculas, length: mayuSculas.length };
};

const aparIencia: { mayuSculas: string; length: number } = leTras("la vida es una sola");
console.log(aparIencia.mayuSculas);
console.log(aparIencia.length); 
