// COMMENT: 1. 함수의 파라미터 타입 정의

function sum01(a: number, b: number) {
  return a + b;
}

sum01(10, 20);

// COMMENT: 2. 함수의 반환 값 타입 정의
function add(): number {
  return 10;
}

// COMMENT: 3. 함수 타입 정의
function sum02(a: number, b: number): number {
  return a + b;
}

// FIXME: 불필요한 인자를 넘겨줄 경우, 에러 발생
sum02(10, 20, 30, 40);

// COMMENT: 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}

log('hello world');
log('hello world', 'abc');
