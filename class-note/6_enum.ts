// COMMENT: 1. 숫자형 이넘
enum Shoes01 {
  Nike,
  Adidas,
}

var myShoes01 = Shoes01.Nike;
console.log(myShoes01); // 0

// --------------------------------------------------

// COMMENT: 2. 문자형 이넘
enum Shoes02 {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes02 = Shoes02.Nike;
console.log(myShoes02); // '나이키'

// --------------------------------------------------

// COMMENT: 3. 이넘 활용 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다');
  }

  if (answer === Answer.No) {
    console.log('오답입니다');
  }
}

askQuestion(Answer.Yes);
