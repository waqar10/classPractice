 /*
 *Aurthor: Waqar
 ***20-12-2018***
 */
 
 //Arrays and Methods

const number=[21,22,23,24,25,26,100];
console.log(number);
const a=prompt("Enter any Number");
for (let i=0; i<number.length; i++){
  console.log(number[i]);
}
const cars=["BMW", "Toyota", "Nissan", "Suzuki", "Ford"];

const otherNumber = new Array(23,34,45,46,47,65);
const mixedArrays=["Waqar",24,null,undefined,true,new Date(),{a:1,b:2,c:3}];

const numValue=number.indexOf(24);
delete number[numValue];
const new_number = number.filter(waqar=>waqar!="");
const value = number.splice(3,1);
console.log(number);

let valueOne = number.reverse();
let valueTwo = cars.length;
let valueThree = number.splice(1,5);
number.push(43);
number.pop();
number.shift(122);
number.shift();

const valueFOur = number.concat(otherNumber);
const valueFive = mixedArrays.sort();
const valueSix = number.sort(function(a,b){
  return a-b;
});

  //Array Of Objects

const bioData={
  firstName:"Waqar",
  middleName:"Ali",
  lastName:"Khan",
  age:24,
  hobbies:["Football","Table Tennis","Cricket","Basketball","Reading","Hiking"],
  address:[{
    city:"Gilgit",
    state:"Pakistan"
  },
  {
    city:"Lahore",
    state:"pakistan"
}],
year:function(yearName){
  return yearName;
}
};
let peopleValue = bioData;
console.log(peopleValue.year("1994"));
console.log(bioData);
