// COMMENT: 타입별 함수 중복 선언 시, 문제점
// FIXME: 유지, 보수에 불리
function logText01(text: string) {
  console.log(text);
  return text;
}

function logNumber(num: number) {
  console.log(num);
  return num;
}

// --------------------------------------------------

// COMMENT: 유니온 타입을 사용 시, 문제점
function logText02(text: string | number) {
  console.log(text);
  return text;
}
// FIXME: a에 string과 관련된 메서드를 사용하더라도 a의 타입이 'string | number'이므로 에러가 발생
const a = logText02('a');
a.split('');

// --------------------------------------------------

// COMMENT: 제네릭을 사용하여 상기 문제점들 해결 가능
function logText03<T>(text: T): T {
  console.log(text);
  return text;
}

logText03<number>(10);
logText03<string>('하이');
logText03<boolean>(true);

const x = logText03<string>('하이');
x.split('');

// --------------------------------------------------

// COMMENT: 인터페이스에 제네릭 선언
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = { value: 'abc', selected: false };

// --------------------------------------------------

// COMMENT: 제네릭의 타입 제한
function logTextLength01<T>(text: T[]): T[] {
  console.log(text.length);
  return text;
}

logTextLength01<string>(['hi', 'abc']);

// --------------------------------------------------

// COMMENT: 제네릭의 타입 제한2 - 정의된 타입 이용
interface LengthType {
  length: number;
}

function logTextLength02<T extends LengthType>(text: T): T {
  console.log(text.length);

  return text;
}

logTextLength02('a');

// --------------------------------------------------

// COMMENT: 제네릭의 타입 제한3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('price');
