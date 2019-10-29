let weekdayNumber= prompt('enter numeric number between 1 and 7');

switch(weekdayNumber)
{ 
case '1':
alert("today is monday");
break;

case '2':
alert('today is tuesday');
break;

case '3':
alert('today is wednesday');
break;

case '4':
alert('today is thursday');
break;

case '5':
alert('today is friday');
break;

case '6':
alert('today is saturday');
break;

case '7':
alert('today is sunday');
break;

default:
    console.log('number not between 1-7');
}