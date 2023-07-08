const sumArray = (numbers)=>{
    return numbers.reduce((fristnumber, currentValue) => fristnumber + currentValue);
}
console.log(sumArray([1,2,3,4,5]))