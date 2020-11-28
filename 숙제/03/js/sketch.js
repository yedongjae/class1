//조건문 가지고 놀기

//반복문으로 연산을 반복하기
//예
var a=1;
var b=2;

for(var i=0; i<2; i++){
    console.log("i number: ",i);
    a+=b;
    console.log("a number: ",a);
    b++;
    console.log("b number: ",b);
}
console.log(a);



// 1부터 10까지의 수를 더한 값을 구하시오
// 힌트: 코딩은 위에서 아래로 흐른다, 변수는 재정의가 가능하다
<<<<<<< Updated upstream
var vd=[1,2,3,4,5,6,7,8,9,10];
// vd[0]+vd[1]+vd[2]...
var add=0;

for(var i=0;i<10;i++){
    // console.log(i);
    // console.log(vd[i]);
    add+=vd[i];
    //add = add+vd[0] =1 >> add = 1 + vd[1]>> ..
    console.log(add);
}

var s ="dongjae hi";
var p;
p = s.split(" ");
console.log(s.split(" "));//"dongjae", "hi"
console.log(p);

var dongjae = Math.floor(Math.random() * 10);
//Math.floor == 정수만들기 0.9,0.3 =>> 0 , Math.ceil == 정수만들기 올림
dongjae = Math.ceil(10.5);// floor()
console.log(dongjae); 

dongjae = Math.random() * 10;
console.log(dongjae); 
=======


// 1. 조건문 가지고 놀기
var situation = "covid18";
if(situation == "covid19-X"){
    console.log("Newyork 갈래");
}
else if (situation == "covid19"){
    console.log("다음에 가야지ㅠㅠ");
}
else{
    console.log("나중에 꼭 가보고 싶어");
}

//
var daeyoung = "호날두 노쇼";
if(daeyoung == "호날두 쇼"){
    console.log("호날두 보면 좋지");
}
else if(daeyoung == "메시 쇼"){
    console.log("메시도 좋지");
}
else{
    console.log("손흥민이라도 봐야지");
}
//
var place = "daegu"
if(place == "daegu"){
    console.log("내일봐");
}
else if(place == "usa"){
    console.log("치폴레 먹을때 봐");
}
else{
    console.log("한달뒤에봐");
}

var situation = "석사";
if(situation == "회사제의"){
    console.log("흔들리겠지만 석사가야지");
}
else if(situation == "석사" ){
    console.log("군대간다고 생각하고 갈꺼야ㅠ");
}
else{
    console.log("자대 대학원은 never!!")
}


// 2. 반복문으로 연산을 반복하기
var a = 1;
var b = 2;

for(var i=0; i<2; i++){
    console.log("i number: ",i);
    a+=b;
    console.log("a number: ",a);
    b++;
    console.log("b number: ",b);
}
console.log(a); 

//

var a = 2;
var b = 2;

for (var i=0; i<2; i++){
    console.log("i number: ",i);
    a=a*b;
    console.log("a number: ",a);
    b--;
    console.log("b number: ",b);
}
console.log(a);
//

var a = 2;
var b = 1;

for (var i=0; i<2; i++){
    console.log("i number: ",i);
    a+=b;
    console.log("a number: ",a);
    b++;
    console.log("b number: ",b);
}
console.log(b)


// 3. 1부터 10까지의 수를 더한 값을 구하시오
// 1-10, 계산, 자동
var minus;
minus = 1+2+3+4+5+6+7+8+9+10;
console.log(minus);

var vd;
var num = 0;
var t;
vd = 0;

for (i=0; i<10; i++){
    vd=vd+1; // vd는 초기값 vd에서 1을 더한 값이다.
    num=vd; // num은 vd의 값이다.
    t=num+vd; // t는 num과 vd를 더한 값이다.
    console.log(t);
}
>>>>>>> Stashed changes
