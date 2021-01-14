console.log('hello');
//alert('Hai this is Eswar Welcome! to my Site')
//Variable
//var b ="somothie";
//document.getElementById('').innerHTML

// Functions
          
/*function greeting(yourname){
    var result='Hello!'+''+yourname;
    alert(result);
}
var name = prompt('What is yourname?');
greeting(name);*/
// We have while and for loops for the loops 


//Data Types
let num = 18; //number
let yourname = 'bob';//string
let name = {first: 'Eswaresh', last: 'Karnati'};//object
let groceries=['apple','bannana','oranges'];//array
let nothing= null;// value null
let random; //undefined

//Strings in java Script (commmon methods)
let fruits = 'apple\nbannana\noranges';//for making to next line we the slash n 
//fruits.length
//fruits.slice(2,);
//fruits.replace('b','1')
//fruits.toUpperCase()
//fruits.toLowerCase()
//fruits.charAt(2)
//fruits.split('a') this split when ever it sees a 



// Array
let fruits =['banana', 'apple' ,'Oranges','pineapple'];
fruits = new Array('banana', 'apple' ,'Oranges','pineapple');// We can declare a Array in this way too
//we can use the values by using the index of the value

fruits[0]='pear';// this is how we can replace the value of the array at the particular index
//we can use the for loop to itreate over the array
for(let i=0;i< fruits.length; i++){
    console.log(fruits[i]);
}

/*array commom methods
fruits.join('$');
fruits.pop(); it actually delete the last item
fruits.push('blackberies') it actually add as last iteam