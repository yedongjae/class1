
// indexOf()
// innerHTML()
// var array = [1,2,3,4,5];
// console.log(Math.max(a,f,e,456,789));

var f=0.5678987;
var e=f.toFixed(2);
console.log(e);

var e=f.toFixed(4);
console.log(e);

var f= e.toString();
console.log(f);

var a = 'abcd';
var b = 'abcd'.length
console.log(b);

var a = "Hello World!";
var b = a.valueOf();
console.log(b);

var a='꾸에에에에엑';
var b= a.replace('엑', '꾸');
console.log(b);

var a="0123456789";
var b=a.split("");
console.log(b);

var a = 'ABCD'
console.log(a.toLowerCase());

var a = 'abcd'
console.log(a.toUpperCase());

//
var a = ['a','b'];
console.log(a.push('c'));

//
var a = ['a','b','c'];
console.log(a.pop('c'));

var a = (4.6);
console.log(Math.ceil(a));
console.log(Math.floor(a));

var a = ('1', '5', '7', '-10');
console.log(Math.max('1', '5', '7', '-10'));
console.log(Math.min('1', '5', '7', '-10'));

var a = "hello, this is dongjae";
var b = a.indexOf("dongjae");
console.log(b);

// innerHTML() 찾아봤으나 이해가 안가요ㅠㅠ

//Array는 했는데도 잘 모르겠어

var a = new Array();

a[0] = 'zero0';
a[1] = 'one1';
a[2] = 'two';

for(var i = 0; i< 3; i++) {
    console.log(a[i]);
}
















// 선택, 아니라 해 
// document.getElementById().innerHTML() 를 사용, 
// 
var ex = document.getElementById("example");
console.log(ex);
ex.innerHTML="hello world";

//1. apple 이라는 단어가 5번이상 나오는 문단을 쓰세요. 
//2. 그 문단 속에서 apple 을 찾아서 orange로 바꾸세요. (단어 사이엔 " "가있음.)
//3. 바꾼후 그 문단을 HTML 의 id: example 인곳에 대입하여 나타내세요. 
// hint: indexOf() 
