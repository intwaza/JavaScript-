//for...in
const employee={
    David: 2000,
    Leo:5000,
    Bella:3000
}
for(let x in employee){
    let salaries="$" + employee[x];
    console.log(`${x} : ${salaries}`);
}

//for...in with strings

const fruits={fruit1:"banana",fruit2:"mango",fruit3:"apple"}
for(let element in fruits){
    console.log(fruits[element])
}
//for...of 
const schools=['AkiraChix','Greenhills','GSNDL']
for(let element of schools){
    console.log(element)
}

