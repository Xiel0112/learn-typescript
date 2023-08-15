// function sum(a, b) {
//   return a + b;
// }

// // COMMENT: number와 string을 연산할 경우, number을 string으로 변환하여 연산
// // 에러 미발생
// sum(10, '20'); // 1020

// ----------
// ----------
// ----------

// COMMENT: JSDoc을 사용하여 타입을 지정할 때, @ts-check를 사용하면 지정된 타입과 입력된 데이터 타입이 다를 경우에 에러 발생
// @ts-check

/**
 * @param {number} a 첫번째 숫자
 * @param {number} b 두번째 숫자
 */

function sum(a, b) {
  return a + b;
}

// COMMENT: @ts-check로 인해 지정된 타입과 입력된 데이터의 타입이 일치하지 않으면 에러 발생
sum(10, '20'); // 1020
