import * as R from "ramda";

// function test(a: any, b: number): string {
//
//   return a.repeat(b);
// }
//
// const curriedTest = R.curry(test);
//
// let soMany : Function = curriedTest("B");
//
// console.log(soMany(3));

// TODO: look into ES6 Set
interface GroupGameWord {
  text: string;
  divisor: number;
}

function getWordGroupGame(words: any[]): Function {

  return (i: number): string => {

    const wordsToSay: string[] = getWordsToSay(i, words);

    if (!R.isEmpty(wordsToSay)) {

      return wordsToSay.join(" ");
    }

    return i.toString();
  };

}

function getWordsToSay(i: number, words: GroupGameWord[]): string[] {

  return R.reduce((wordsToSay: string[], groupGameWord: GroupGameWord) => {

    if (i % groupGameWord.divisor === 0) {

      wordsToSay.push(groupGameWord.text);
    }

    return wordsToSay;

  }, [], words);
}


const fizzBuzzWords: GroupGameWord[]  = [{ text: "fizz", divisor: 3 }, { text: "buzz", divisor: 5 }, { text: "jazz", divisor: 10}];

const fizzBuzz: Function = getWordGroupGame(fizzBuzzWords);

R.map((i) => {

  console.log(fizzBuzz(i));

}, R.range(0, 16));
