
// indexOf()
// innerHTML()
// var array = [1,2,3,4,5];
// console.log(Math.max(a,f,e,456,789));

var f=0.5678987;
 e=f.toFixed(3);
console.log(e);

var e=f.toFixed(4);
console.log(e);

var a = 12345;
b = a.toString();
console.log(a);

var f= e.toString();
console.log(f);

var a = 'a';
var b = ''.length
console.log(b);

var a = "써지리뉴";
b = a.valueOf();
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

//4개가 있다.4번째가 아니라
var a = ['a','b','d'];
console.log(a.push('c'));
console.log(a);
//
var a = ['a','b','c'];
console.log(a.pop('c'));
console.log(a);
var z = ['동재', '경한'];
z.push('대영');
console.log(z);
z.pop(0);
console.log(z);

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

//Array는 했는데도 잘 모르겠어 아리까리한 느낌

var a = new Array();

a[0] = 'zero0';
a[1] = 'one1';
a[2] = 'two';

for(var i = 0; i< 3; i++) {
    console.log(a[i]);
}

// console.log(Math.max(a,f,e,456,789)); 이것 도통 뭔이야긴지 몰겟어ㅠ







// 선택, 아니라 해 
// document.getElementById().innerHTML() 를 사용, 
// 
var ex = document.getElementById("example");
console.log(ex);
console.log("ex.innerHTML = ", ex.innerHTML);
ex.innerHTML="bye bye";

//1. apple 이라는 단어가 5번이상 나오는 문단을 쓰세요. 
//2. 그 문단 속에서 apple 을 찾아서 orange로 바꾸세요. (단어 사이엔 " "가있음.)
//3. 바꾼후 그 문단을 HTML 의 id: example 인곳에 대입하여 나타내세요. 
// hint: replace()


var sentence ="Apple is a fruit. Apple is tasty. I like apple. Dongjae like apple too. Kyoung Han is a bitch ass and doesn't like an apple.";
var newsentence= sentence.replace("apple", "orange");
console.log(newsentence);
//problem : 
// 1. only 1 is changed
// 2. capitalized apples are not changed
newsentence=sentence.toLowerCase();
// console.log(newsentence);

// newsentence= newsentence.replace("apple", "orange");
// console.log(newsentence);
// console.log(newsentence.search("apple"));

var score= newsentence.search("apple");

do{
    console.log(score);
    newsentence= newsentence.replace("apple", "orange");
    score= newsentence.search("apple");
    
}while (score>0);
console.log(newsentence);





//1. apple 이라는 단어가 5번이상 나오는 문단을 쓰세요. 
//2. 그 문단 속에서 apple 을 찾아서 orange로 바꾸세요. (단어 사이엔 " "가있음.)
//3. 바꾼후 그 문단을 HTML 의 id: example 인곳에 대입하여 나타내세요. 
// hint: replace()


var sentence ="Apple is a fruit. Apple is tasty. I like apple. Dongjae like apple too. Kyoung Han is a bitch ass and doesn't like an apple.";
var newsentence= sentence.replace("apple", "orange");
console.log(newsentence);
//problem : 
// 1. only 1 is changed
// 2. capitalized apples are not changed
newsentence=sentence.toLowerCase();
// console.log(newsentence);

// newsentence= newsentence.replace("apple", "orange");
// console.log(newsentence);
// console.log(newsentence.search("apple"));

var score= newsentence.search("apple");

do{
    console.log(score);
    newsentence= newsentence.replace("apple", "orange");
    score= newsentence.search("apple");
    
}while (score>0);
console.log(newsentence);


var sentence = 'Orange is yellow. Orange is sour. I like orange. Kyunghan eats a lot of oranges and he loves oranges.';
var newsentence = sentence.replace('orange', 'Orange');
console.log(newsentence);
newsentence=sentence.toLowerCase();
var score = newsentence.search('orange');

do{
    console.log(score);
    newsentence= newsentence.replace('orange','Orange');
    score= newsentence.search('orange');

}while (score>0);
console.log(newsentence);


var x ="Watermelon is tasty. Watermelon is great. I like watermelon."
//수박이 아니라 오렌지로, 그리고 문법에 맞도록...

var w = x.toUpperCase();
console.log(x);
console.log(w);
console.log("동재 바보");

// var n= x.split(" ");
// console.log(n);

// for(i=0;i<9;i++){
//     if(n[i]=="Watermelon"){
//         n[i]="Orange";
//     }
//     if(n[i]=="watermelon."){
//         n[i]="oranges."
//     }
// }
// console.log(n);

var n= x.split(". ");
console.log(n);
console.log(n[0]);


var i = n[0].toLowerCase();
var j = i.replace("watermelon","orange");
j=j.split("");
j[0]=j[0].toUpperCase();

console.log(j);

var first="";
for(i=0; i<j.length;i++){
    first+=j[i];
    console.log("first+j[",i,"]");
}
console.log(first);

function t(sample){
    var hahaha="";
    sample=sample.toLowerCase();
    //sample은 샘플이 소문자가 된상황 -line204
    sample=sample.replace("watermelon","orange");
    //샘플은 샘플안에 있던 수박이 오렌지로 변환된상황 -line205
    //수박에서 오렌지로는 변경됨!!
    sample=sample.split("");
    //샘플이 글자단위로 쪼개져서 배열의 형태로 있는 상황 -line206
    sample[0]=sample[0].toUpperCase();
    //샘플의 0번째 값이 대문자로 바뀌어진 상황 -line207
    //여기서 필요한건! 이 부속품들을 다 붙여야하는 상황
    for(i=0;i<sample.length;i++){
        hahaha+=sample[i];
    }
    return(hahaha);
}
console.log(t(n[0]));
var final={};
var final1="";
final1+=t(n[0]);
console.log(t(n[0]));
console.log(t(n[1]));
console.log(t(n[2]));

console.log(t(n[0])+". "+t(n[1])+". "+t(n[2]));