// 변수의 정의/ 선언 declaration or declare 
// 변수== 어떠한 데이터가 저장되는 장소
// 컴퓨터는 안똑똑... 그래서 처음부터 끝까지 다 알려줘야함
// 질문: 컴퓨터는 데이터를 어디에 저장해야되는지 알까?
var a = 1; 
var b = 24;
var d = "24"; 
var c = "hello ";
var e = "world";
var f = "Dongjae";
var g = "Dae Young";
var h = "hello world";
var i = " and ";

//변수의 조합
console.log(10+20);
console.log(10 + "20");
console.log("hello " + "world");
console.log("hello world");
console.log(h);
console.log(c,e);
console.log(c+f);
console.log(c+f+i+g);

h = "bye world"; //변수의 재 선언
console.log(h);

// 상수
//변수는 var 상수 constant 따라서 상수 나타낼때: const
const yoo = 3;
// 변수의 타입(데이터타입)
// 변수는 무궁무진해~
// 변수는 number도 돼, 스트링도돼, boolean도돼
//boolean = true or false
var place = "gyungju";

//변수의 연산

// = : 선언
// == : 비교
// != : 같지않다
// || : 또는
// && : 그리고
// + : 더하기
// ++ : +1
// - : 빼기
// -- : -1
// * : 곱하기
// / : 나누기
// A =+ B : A는 앞으로 A + B
// A =- B : A는 앞으로 A - B
// A =* B : A는 앞으로 A * B
// A =/ B : A는 앞으로 A / B

//조건문
if(place =="seoul"){
    console.log("동재 한번 보자~");
}
else if(place == "gyungju"){
    console.log("다음에 보자");
}
else if(place == "north korea"){
    console.log("대홍단 왕감저");
}
else{
    console.log("나중에 회먹으러 갈께~");
}
