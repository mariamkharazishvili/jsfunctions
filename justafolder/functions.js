/* 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n)
და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს*/


function maxNum(m,n){
    if(m>n){
        return m;
    }else if(m<n){
        return n;
    }else{
        return 0;
    }

}

//აქ განვიხილოთ სამივე შესაძლო ვარიანტი :)) <3 

console.log(maxNum(5,3));
console.log(maxNum(18,21));
console.log(maxNum(14,14));




// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი

function sum(num1,num2){
    
    return num1+num2;

}

console.log(sum(12,8));
// 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი) 

function fullName(){
    
    console.log("mariam kharazishvili");
}


fullName();

/*4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname 
დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)*/ 



function full_Name(firstName,lastName){
    return firstName+" "+lastName;
}

console.log(full_Name("mariam","kharazishvili"));

/* 5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე 
  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, 
 დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. 
Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)*/

function multiplication(n){
    let number = 1;
    for (i =1;i<=n;i++){
        number*=i
    }
    return number;
}

console.log(multiplication(5));


// Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties:
//  firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი fullName 
// //  რომელიც აბრუნებს სტუდენტის სრულ სახელს ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) */

const student ={
    firstName:"mariam",
    lastName:"kharazishvili",
    age:21,
    scores:[ 4,7,5,3,2],
    fullName: function(){
        return this.firstName+" "+ this.lastName
    }
}

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)


console.log(student.fullName())

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function SumOfScores(){
    let sum =0;
    
    
    for(i=0;i<student.scores.length;i++){
        sum += student.scores[i]
    }
    return sum
}

console.log(SumOfScores());



//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

console.log(student.firstName);
console.log(student.age);





