// 변수의 정의/ 선언 declaration or declare 
// 1. 변수를 number, string, boolean 타입으로 각 3개씩 만들기

//변수의 조합
// 2. console.log 안에서 + 혹은 , 을 사용하여 변수를 조합하세요. 

//변수의 연산

// + : 더하기
// ++ : +1
// - : 빼기
// -- : -1
// * : 곱하기
// / : 나누기
// A =+ B : A는 앞으로 A + B
// A =- B : A는 앞으로 A - B


// 3. 만든 변수와 위의 연산자를 모두 사용해서 연산을 하세요. (숫자, 문자열 포함)
// console.log 사용해서 표시할것.
// console.log(a=+b);

// 상수
// 숫자형 상수를 1개, 문자형 상수를 1개 만드세요

//조건문
// == : 비교
// != : 같지않다
// || : 또는
// && : 그리고

// 4. if 조건문과 위의 비교구문들을 사용하여 아무 표현이나 하세요. 
// if(a==b){
    // console.log("hi");
// }
// if, else if, else사용할것. 

// 5. 자바 스크립트 for 반복문에 대해서 한번 읽어오기
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Loops_and_iteration
// (for 문 부분)

//다음시간에는 반복문 과 함수


// 숙제

var A = 3;
var B = 7;
var C = 6;
var D = "100";
var E = "120";
var F = "hello louis";
var G = true;
// boolean은 어떻게 설정하는지 잘 몰겠어ㅠ



console.log(3+7);
console.log(3+6);
console.log(6+"100");
console.log("hello louis" + 3);
console.log("hello louis" + "100");
console.log(D);
console.log(F);
console.log(E+F);


console.log(A+B);
console.log(A++);
console.log(A-B);
console.log(A--);
console.log(A*B);
console.log(A/B);
console.log(A=+B);
console.log(A=-B);



const why = 5;
const scene = "simple";


var situation = "covid20";
if(situation == "covid19-X"){
    console.log("Newyork 갈래");
}
else if(situation == "covid19"){
    console.log("다음에 가야지ㅠㅠ");
}
else{
    console.log("나중에 꼭 가보고 싶어");
}

var rand1 = 3; 
var rand2 = 5;
var bool = rand1<rand2;
var daeyoung;
daeyoung=1;
daeyoung=4; 
console.log(daeyoung);
console.log(bool);
bool = situation=="covid19-X";
console.log(bool);