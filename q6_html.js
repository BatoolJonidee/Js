let answer1=document.getElementById("answer1");
let answer2=document.getElementById("answer2");
let answer3=document.getElementById("answer3");
let answer4=document.getElementById("answer4");
let nextBtn=document.getElementById("nextBtnId");
let userAnswer=JSON.parse(localStorage.getItem("userAnswer"))
let userAnswerValue=JSON.parse(localStorage.getItem("userAnswerValue"));
let isAnswerToF=JSON.parse(localStorage.getItem("isAnswerToF"));
let flag=0;
answer1.addEventListener("click",function(){
    if(answer1.checked==true){
        userAnswer[5]="&lt;strong&gt;";
        localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
        userAnswerValue[5]=(Number(answer1.value));
        localStorage.setItem("userAnswerValue",JSON.stringify(userAnswerValue));
        isAnswerToF[5]=false;
        localStorage.setItem("isAnswerToF",JSON.stringify(isAnswerToF));
        flag=1;
    }
})
answer2.addEventListener("click",function(){
    if(answer2.checked===true){
        userAnswer[5]="&lt;em&gt;";
        localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
        userAnswerValue[5]=(Number(answer2.value));
        localStorage.setItem("userAnswerValue",JSON.stringify(userAnswerValue));
        isAnswerToF[5]=true;
        localStorage.setItem("isAnswerToF",JSON.stringify(isAnswerToF));
        flag=1;
    }
})
answer3.addEventListener("click",function(){
    if(answer3.checked===true){
        userAnswer[5]="&lt;b&gt;";
        localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
        userAnswerValue[5]=(Number(answer3.value));
        localStorage.setItem("userAnswerValue",JSON.stringify(userAnswerValue));
        isAnswerToF[5]=false;
        localStorage.setItem("isAnswerToF",JSON.stringify(isAnswerToF));
        flag=1;
    }
})
answer4.addEventListener("click",function(){
    if(answer4.checked===true){
        userAnswer[5]="&lt;br&gt;";
        localStorage.setItem("userAnswer",JSON.stringify(userAnswer));
        userAnswerValue[5]=(Number(answer4.value));
        localStorage.setItem("userAnswerValue",JSON.stringify(userAnswerValue));
        isAnswerToF[5]=false;
        localStorage.setItem("isAnswerToF",JSON.stringify(isAnswerToF));
        flag=1;
    }
})
nextBtn.addEventListener("click",function(){
    if(flag==1){
        window.location.href="./q7_html.html";
    }
})
