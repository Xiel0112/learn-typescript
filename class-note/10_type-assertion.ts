// COMMENT: 타입 단언(type assertion)
// as를 사용하여 개발자 재량으로 타입 지정 >>>>>>>>>> 타입스크립트의 타입 추론
var a;
a = 20;
a = 'a';
var b = a as string;

// --------------------------------------------------

// COMMENT: DOM API 조작
// <div id='app'>hi</div>

var div = document.querySelector('div') as HTMLDivElement;
div.innerText;
