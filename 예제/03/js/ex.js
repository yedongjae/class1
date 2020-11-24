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
// A += B : A는 앞으로 A + B
// A -= B : A는 앞으로 A - B

//조건문
var a;
a = 1;
var b;
b = 0;
var c;
c = 1;
var d;
d = 2;
var e;
e = 3;
var answer1, answer2, answer3;

console.log(answer1);
console.log(answer2);
console.log(answer3);

if(a==b){
    answer1=10;
}
else{
    answer1=0;
}
if(a!=c){
    answer2=5;
}
else if(a==c){
    answer2=4;
}
if(e>d+c){
    answer3=0;
}
else if (e<d+c){
    answer3=1;
}
else{
    answer3=10;
}
console.log(answer1);
console.log(answer2);
console.log(answer3);

//반복문
// for each time I have ate the fruit you do the push up
for(var i=0;i<4;i++){
    console.log(i);
}

// 지역변수 글로벌 변수

// console.log("*");
for(var i=0;i<5;i++){
    // console.log("*");
}

// *
// **
// ***
// ****
// *****

for( var i=0;i<5;i++){
        console.log(" ");
    for(var j =0;j<5;j++){
        console.log("*");
    }
}
//*****

//*****

//*****

//*****

//*****