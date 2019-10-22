let hour= prompt('enter the current hour');

if(hour<0||hour>23){
    alert('input is incorrect');
}
if(hour<8|| hour>18|| hour==18){
    alert('Outside of office hours');

}

if (hour>8|| hour==8 && hour<18){
    alert('we are open');
}
