// COMMENT: 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer01: Developer;
var person01: Person;

// FIXME: 할당될 값의 속성이 더 적을 경우, 할당 불가
developer01 = person01;
person01 = developer01;

// --------------------------------------------------

// COMMENT: 클래스

class PersonClass {
  name: string;
}

var developer02: Developer;
var person02: PersonClass;

// FIXME: 할당될 값의 속성이 더 적을 경우, 할당 불가
developer02 = new PersonClass();

// --------------------------------------------------

// COMMENT: 함수
var add = function (a: number): void {
  // ...
};

var sum = function (a: number, b: number): void {
  // ...
};

// FIXME: 할당될 값의 인자가 더 적을 경우, 할당 불가
add = sum;
sum = add;

// --------------------------------------------------

// COMMENT: 제네릭
interface Empty<T> {
  // ...
}

var empty01: Empty<string>;
var empty02: Empty<number>;

empty01 = empty02;
empty02 = empty01;

interface NotEmpty<T> {
  data: T;
}

// FIXME:
var notEmpty01: NotEmpty<string>;
var notEmpty02: NotEmpty<number>;
notEmpty01 = notEmpty02;
notEmpty02 = notEmpty01;
