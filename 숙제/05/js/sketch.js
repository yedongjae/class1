//주사위 
var dice=Math.ceil(Math.random()*6);
console.log("주사위 눈의 갯수 ", dice);

//반복문 이용해서 몇번 던지고, 
//던질때마다 어떠한 반응!

thr=Math.random()*10;
console.log(thr);
dongjae="앞면";
djgf="뒷면";

for( var i=0; i<2;i++){
    if(thr>4){
        coin="앞면";
    }
    else if(thr<4){
        coin="뒷면";
    }
    else{
        coin="앞면도 뒷면도 아냐"
    }
    console.log(coin);
    
    if(coin==dongjae){
        console.log("내가 이김 후후훗");
    }
    // else if(coin!="앞면입니다~"){-
    //     console.log("에이 ㅅㅂ");
    // } 결국 똑같다
    else{
        console.log("에이 ㅅㅂ");
    }
}

var dice=Math.ceil(Math.random()*6);
console.log("주사위 눈의 갯수 ", dice);

//숙제
//레드벨벳이 오면 주사위를 던질꺼야
//교지대 사람이 오면 주사위를 두번 던져 곱할꺼야
//나는 결과를 기록하겠어. 
//조이, 슬기, 아이린, 경한, 종환, 준원
//둘다 아니면 주사위 던지지마
var d; //null
var sign; //숫자 (line 57-77 참조)
var random;//누가올지모르는 친구를 정해주는 랜덤변수 (line 15 참조)
var friend=["조이", "슬기", "아이린", "경한", "종환", "준원"];
var visitor;//방문한 친구의 이름
var result레드벨벳=0;//던져서 레드벨벳이 나온 횟수
var result교지대=0;//던져서 교지대가 나온 횟수

for(var i=0;i<23;i++){
    var rand=Math.floor(Math.random()*6);//0,1,2,3,4,5
    if(rand==0){
        visitor=friend[0];//vistor변수의 값은 friend 변수 배열중 0번째값인 "조이"
    }
    else if(rand==1){
        visitor=friend[1];//visitor변수의 값은 friend 변수 배열중 1번째값인 "슬기"
    }
    else if(rand==2){
        visitor=friend[2];//visitor변수의 값은 friend 변수 배열중 2번째값인 "아이린"
    }
    else if(rand==3){
        visitor=friend[3];//visitor변수의 값은 friend 변수 배열중 3번째값인 "경한"
    }
    else if(rand==4){
        visitor=friend[4];//visitor변수의 값은 friend 변수 배열중 4번째값인 "종환"
    }
    else if(rand==5){
        visitor=friend[5];//visitor변수의 값은 friend 변수 배열중 5번째값인 "준원"
    }
    else{
        visitor=friend[6];//visitor변수의 값은 friend 변수 배열중 6번째값은 없다.
    }
    
    if(visitor=="레드벨벳"){
        why();//visitor변수의 값은 friend 변수 배열중  "레드벨벳" 이라면
    }
    else if(visitor=="교지대"){
        why();//if가 아닌데 만약에 visitor변수의 값은 friend 변수 배열중 "교지대"라면
    }
    else{
        console.log("주사위 던지지마"); //둘다 아니면 주사위 던지지마

    }
}
console.log("조이: ", resultf, "경한: ", resultb);// 모르겠어ㅠㅠ



