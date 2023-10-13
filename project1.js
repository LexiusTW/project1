let a = 5; //1
let b = "Text"; //2, 5
let c = "TEXT"; //3, 5
let d =124; //4, 7
let e = d.toString(); //6

//1
if(a>=0){
    console.log(`Чсло ${a} - положительно`);  
}
else{
    console.log(`Число ${a} - отрицательно`);
}

//2
console.log(`Длина стркои = ${+b.length}`);

//3
console.log(`Последний символ строки - ${c[c.length - 1]}`);

//4
if (d/2==0){
console.log(`Число ${d} - четное`);
} 
else{
    console.log(`Число ${d} - нечетное`);
}

//5
if (b[0] == c[0])
{
    console.log("Первые буквы совпадают");
}

else{
    console.log("Первые буквы не совпадают");  

}

//6
console.log(`Сумма первой и последней цифры числа - ${d} равна - ${Number(e[0])+Number(e[e.length - 1])}`);

//7
let sum = 0;
let str = String(d);

for(let digit of str) {
    sum += +digit;
}
console.log(`Сумма цифр числа - ${d} равна - ${sum}`);