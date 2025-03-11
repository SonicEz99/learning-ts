const num: number = 20;

console.log(num);

let str = "yaya"; //let มันรู้ว่าเป๋น string เพราะว่า อนุมาณได้จาก ตัว ""
const strr = "yaya";

let userName: string | null | undefined = "hello";

userName = null;

console.log(userName);

const uppercaseFirstLetter = (letter: string | null | undefined) => {
  if (typeof letter === "string") {
    return letter[0].toUpperCase();
  } else {
    return letter;
  }
};

console.log(uppercaseFirstLetter("hello"));

//ไม่แนะนำให้ใช้ any
const fixed = (num: number) => {
  return num?.toFixed(2); //digits after the decimal point.
};
let number: unknown = 5.222;

if (typeof number === "number") {
  console.log(fixed(number));
}

(number as number).toFixed(2); // use type assertions. In another form (<number>num).toFixed(2)

const num1: number[] = [1, 2, 3];
const num2: unknown[] = ["hello", 2, false];
const num3: Array<number> = [4, 5, 6];

num3[0] = 2;

const num4: readonly number[] = [1, 2, 3];

// num4[0] = 1 ทำไม่ได้ ติด read only

const num5: ReadonlyArray<number> = [4, 5, 6];


// string
// number
// bigint
// boolean
// null
// undefined
// symbol
