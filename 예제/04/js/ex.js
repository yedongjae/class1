//동전 던지기 generator

var coin;// "앞면" "뒷면"나타내려고~ 
var thr;// 계산용

thr=Math.random()*10;
console.log(thr);
dongjae="앞면입니다~";
djgf="뒷면입니다~";

for( var i=0; i<2;i++){
    if(thr>4){
        coin="앞면입니다~";
    }
    else if(thr<4){
        coin="뒷면입니다~";
    }
    else{
        coin="동전이 세워졌습니다~"
    }
    console.log(coin);
    
    if(coin==dongjae){
        console.log("내가 이김 후후훗");
    }
    // else if(coin!="앞면입니다~"){
    //     console.log("에이 ㅅㅂ");
    // } 결국 똑같다
    else{
        console.log("에이 ㅅㅂ");
    }
}


//주사위 
var dice=Math.ceil(Math.random()*6);
console.log("주사위 눈의 갯수 ", dice);

// 동전 던지기 generator

var coin;// "앞면" "뒷면"나타내려고~ 
var thr;// 계산용

thr=Math.random()*10;
console.log(thr);
dongjae="앞면입니다~";
djgf="뒷면입니다~";

for( var i=0; i<2;i++){
    if(thr>4){
        coin="앞면입니다~";
    }
    else if(thr<4){
        coin="뒷면입니다~";
    }
    else{
        coin="동전이 세워졌습니다~"
    }
    console.log(coin);
    
    if(coin==dongjae){
        console.log("내가 이김 후후훗");
    }
}
