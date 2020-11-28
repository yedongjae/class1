//조건문 가지고 놀기

//반복문으로 연산을 반복하기
//에
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

dongjae = Math.random() * 10
console.log(dongjae); 