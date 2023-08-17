// COMMENT: interface와 type의 차이
// 타입의 확장 가능 여부 >> 인터페이스는 확장이 가능, 타입 별칭은 확장 불가능

interface Person1 {
  name: string;
  age: number;
}
// 프리뷰 확인해보기
var seho: Person1 = { name: '세호', age: 30 };

type Person2 = { name: string; age: number };
// 프리뷰 확인해보기
var jinho: Person2 = { name: '진호', age: 30 };
