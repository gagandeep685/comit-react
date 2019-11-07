
function showEven()

 {
    for(let i=0;i<10;i++){
    if(i%2==0)
    console.log({i})

  
}
 }
showEven()

  

 let userName='Gagan';
 let age=29;
 let streetName='appleby';
 let phoneNumber=6395602685;
 let married;
 
 function showUser()
 {
  userName='Gagan';
  age=29;
  streetName='appleby';
  phoneNumber=6395602685;
   married='married'||'not married';
   console.log(userName, age, streetName, phoneNumber, married );
}
showUser(true)


var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));





      