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