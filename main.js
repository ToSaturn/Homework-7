function throughOnce(fn){    //Было очень непонятно
 var wr=false;
 return (text)=>{
   wr=!wr;
   wr ? fn(text): null;
 }
}
var logThroughOnce=throughOnce(function(text){
  console.log(text);
} )

logThroughOnce("Hello World!");
logThroughOnce("Hello World!");
logThroughOnce("Hello World!");
logThroughOnce("Hello World!");
