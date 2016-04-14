// var numbers_in_calc=new Array[
//     1,
//     2,
//     3,
//     4
// ];
var plus;
var number;
var input=document.getElementsByClassName("answer_bar");

plus= function(addition){
    plus.addEventListener("keydown", function(event){
         console.log(event. keyCode===107);
         document.answer_bar.appendChild("plus");
    });
   
    

};
// testing
var sub;
sub=function(subtraction){
    sub.addEventListener("keydown", function(event){
        if(event.keyCode===109);
        document.answer_bar.appendChild("sub");
    });
};


document.addEventListener("DOMContentLoaded", function(event){
  
});