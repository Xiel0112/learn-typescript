// COMMENT: 타입 추론 기본1
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// --------------------------------------------------

// COMMENT: 타입 추론 기본2
// 인터페이스와 제네릭을 이용한 타입 추론 방식
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = { value: 'abc', title: 'hello' };

// --------------------------------------------------

// COMMENT: 타입 추론 기본3
// 복잡한 구조에서의 타입 추론 방식
interface Dropdown02<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown02<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'abc',
  value: 'abc',
  description: 'abc',
  tag: 'abc',
};

// --------------------------------------------------

// COMMENT: Best Common Type
var arr = [1, 2, , true, 'abc'];
