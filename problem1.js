const obj = {name: 'jhone', age: 30, city:'New work'}
const arr = [10,20,30,40]

function destructureExample(obj) {
    const { name, age } = obj;
    const result = {
      name,
      age,
    };
  
    return result;
  }

  
const result = destructureExample(obj);
console.log(result)