import fs from 'fs';
import path from 'path';
import { reverseString } from './stringUtils';
const sentence: string = "Hola, ¿cómo estás?";


const reversedSentence: string = reverseString(sentence).reversed;

fs.writeFileSync('reversed.txt', reversedSentence);
const filePath = path.join(__dirname, 'reversed.txt');
console.log(`Reversed sentence saved at: ${filePath}`);