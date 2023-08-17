// COMMENT: 유니온 타입 사용 시, 장점
// if문의 타입 조건에 따라 타입별 메소드 자동 완성 기능 사용 가능
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString();
  }

  if (typeof value === 'string') {
    value.toString();
  }

  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

// -----
// -----
// -----

// COMMENT: 유니온 타입과 인터섹션 타입의 차이
interface Developer01 {
  name: string;
  skill: string;
}

interface Person01 {
  name: string;
  age: number;
}

// COMMENT: 유니온 타입
// 타입 가드에서 각 interface의 공통된 프로퍼티만 접근 가능
function askSomeone1(someone: Developer01 | Person01) {
  someone.name;
}
// 인자를 전달할 경우, 한 interface의 모든 프로퍼티 필수 입력
askSomeone1({ name: '디벨로퍼', skill: '웹 개발' });
askSomeone1({ name: '사람', age: 30 });

// COMMENT: 인터섹션 타입
// 타입 가드에서 각 interface의 모든 프로퍼티에 접근 가능
function askSomeone2(someone: Developer01 & Person01) {
  someone.name;
  someone.age;
  someone.skill;
}
// 인자를 전달할 경우, 모든 interface의 모든 프로퍼티 필수 입력
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 30 });
