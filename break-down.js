const products = [
    {name: 'iphone 14', price:70000},
    {name: 'samsung s14', price:60000},
    {name: 'dell laptop', price:50000},
    {name: 'apple watch', price:4000},
    {name: 'asus afsos', price:40000},
    {name: 'tecno a50', price:4000},
];
// for (const product of products){
//     if (product.price<5000){
//         break;
//     }
//     console.log(product)
// }
for (const product of products){
    if (product.price<10000){
        continue;
    }
    // console.log(product)
}
// console.log('after the loop')

function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
//   const result = compare("15" + 15);
  console.log("15" + 15);

  function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
//    console.log(result);

let a = 'hi'
let b = 'by'
console.log(a+b)