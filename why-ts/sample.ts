// COMMENT: add(a: 인자, b: 인자): 반환
function add(a: number, b: number): number {
  return a + b;
}

// FIXME: 지정된 타입과 입력된 데이터의 타입이 일치하지 않으면 에러 발생
add(10, '20');

// COMMENT: 지정된 타입과 관련된 메서드들의 자동 완성 기능 사용 가능
var result = add(10, 20);
result.toLocaleString();
