// // function add(a, b) {
// //   return a + b;
// // }
// // console.log(add(3,1));
// //
// // var toAdd = [9, 5];
// //
// // console.log(add(...toAdd));
//
// var groupA = ['Farish, Lori, Kash'];
// var groupB = ['Dad', 'Mom', 'Sister'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person =['Farish' , 45];
var personTwo =['Lori' , 46]

function hello(name, age){
  return 'Hi ' + name + ' you are ' + age;
};

console.log(hello(...person));
console.log(hello(...personTwo));

var names = ['Farish', 'Lori'];
 console.log(names);
var final = ['Kash', ...names];


console.log(final);

final.forEach(function(loop){
  console.log('Hi ' + loop);
});
