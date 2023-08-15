function sum(a, b) {
  return a + b;
}

// COMMENT: number와 string을 연산할 경우, number을 string으로 변환하여 연산
// 에러 미발생
sum(10, '20'); // 1020
