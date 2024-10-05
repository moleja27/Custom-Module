import { reverseString, countCharacters, leTras } from "./stringUtils"


const result: { reversed: string; length: number } = reverseString("hola");
console.log(result.reversed);
console.log(result.length);
console.log(countCharacters("hola"));

const aparIencia: { mayuSculas: string; length: number } = leTras("la vida es una sola");
console.log(aparIencia.mayuSculas);
console.log(aparIencia.length);

