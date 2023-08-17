interface User {
  age: number;
  name: string;
}

// COMMENT: 1. 변수에 인터페이스 활용
var seho: User = {age: 33, name: '세호'}

// COMMENT: 2. 함수에 인터페이스 활용
function getUser(user: User) {console.log(user);}

const capt = {name: '캡틴', age: 100}

getUser(capt);

// COMMENT: 3. 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction{(a: number, b: number): number;}

var sum: SumFunction;
sum = function(a: number, b: number): number {return a + b;}


// COMMENT: 4. 인덱싱
interface StringArray {[index: number]: string;}

var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'A'

// COMMENT: 5. 딕셔너리 패턴
interface StringRegexDictionary {
[key: string]: RegExp;
}

var obj: StringRegexDictionary = {
cssFile: /|.css$/,
jsFile: /|.js$/,
}

// COMMENT: 6. 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var thor: Developer = {
  name: '캡틴', 
  age: 100,
  language: 'ts'
}