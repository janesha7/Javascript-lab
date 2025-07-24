//array
/*let number =[1,2,"three","true"];
let names=new Array("jhon","james");
console.log(number[2]);
console.log(names.length);
// filter().filters the result arguments
//let number=[1,2,3,4,5];
let result=number.filter(number=>number[0]);
console.log(result);
// slice.delete the element based on index value
let number=[1,2,3,4,5];
number.splice(1,3,"hai");
console.log(number);
//object
let details={
    name:"JS",
    totalmark:"85",
    //nested object
    subjects:{
        dbms:87,
        java:75
    },
    avg:function(){
        let sum =parseInt(this.subjects.dbms) + (this.subjects.java);
        return sum;
    }
 }
console.log(details.totalmark);
console.log(details["name"]);
console.log(details.subjects.dbms);
console.log(details.subjects.java);
console.log(details.avg());*/
const person={
    name:"tomy",
    age:"23"
};
console.log(person);
const{name,age}=person;