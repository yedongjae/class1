//하루 24시간동한 매 시간마다 친구가 찾아온대 누가 올지는 몰라
//나는 오늘 철수랑 영미가 내앞에 올때마다 동전을 던질꺼야.
//다른애가오면 연필을 던질꺼야 
//나는 결과를 기록하겠어. 앞 뒤 다 셀꺼야
//영미, 슬기, 아이린, 헤진, 철수, 준원
var d; //null
var sign; //앞 또는 뒤 (line 57-77 참조)
var random;//누가올지모르는 친구를 정해주는 랜덤변수 (line 15 참조)
var friend=["영미", "슬기", "아이린", "헤진", "철수", "준원"];
var visitor;//방문한 친구의 이름
var resultf=0;//던져서 앞이 나온 횟수
var resultb=0;//던져서 뒤가 나온 횟수

for(var i=0;i<23;i++){
    var rand=Math.floor(Math.random()*6);//0,1,2,3,4,5
    if(rand==0){
        visitor=friend[0];//vistor변수의 값은 friend 변수 배열중 0번째값인 "영미"
    }
    else if(rand==1){
        visitor=friend[1];//visitor변수의 값은 friend 변수 배열중 1번째값인 "슬기"
    }
    else if(rand==2){
        visitor=friend[2];//visitor변수의 값은 friend 변수 배열중 2번째값인 "아이린"
    }
    else if(rand==3){
        visitor=friend[3];//visitor변수의 값은 friend 변수 배열중 3번째값인 "혜진"
    }
    else if(rand==4){
        visitor=friend[4];//visitor변수의 값은 friend 변수 배열중 4번째값인 "철수"**** 
    }
    else if(rand==5){
        visitor=friend[5];//visitor변수의 값은 friend 변수 배열중 5번째값인 "준원"
    }
    else{
        visitor=friend[6];//visitor변수의 값은 friend 변수 배열중 6번째값은 없다.
    }
    //근데 형 여기에서 동전을 던진다는것을 설정안한거같아
    if(visitor=="철수"){
        all();//visitor변수의 값은 friend 변수 배열중  "철수"라면
    }
    else if(visitor=="영미"){
        all();//if가 아닌데 만약에 visitor변수의 값은 friend 변수 배열중 "영미"이라면
    }
    else{
        console.log("연필던져,반복된 횟수는 방문자가 철수나 영미가 아니었던 횟수"); //둘다 아니면 연필던져
    }
}
console.log("앞: ", resultf, "뒤: ", resultb);//

function all(){
    toss();//던지고
    real(sign);//기록하고
}

function toss(){
    d=Math.random()*2;//0,1,2 중 랜덤
    if(d>1){
        sign="front";//앞이 나오면
    }
    else if(d<1){
        sign="back";//뒤가 나오면
    }
    else{
        sign="standing";//아니면 세워진거라면
    }
}

function resultCheck(){
    if(sign=="front"){
        resultf++;//앞이 나오면 ++
    }
    else if(sign=="back"){
        resultb++;//뒤가 나오면 ++
    }
}

function real(a){
    if(a=="front"){
        resultf++;//앞이 나오면 ++
    }
    else if(a=="back"){
        resultb++;//뒤가 나오면 ++
    }
}

real(sign);// sign은 이거다!



