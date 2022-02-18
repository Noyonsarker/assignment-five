const products = [
    {name: 'iphone 14', price:70000},
    {name: 'samsung s14', price:60000},
    {name: 'dell laptop', price:50000},
    {name: 'apple watch', price:20000},
    {name: 'asus afsos', price:40000},
    {name: 'tecno a50', price:7000},
];
function searchProducts(products,searchText){
    const result = []
    for(const product of products){
        if(product.name.includes(searchText)){
            // console.log(product.price)
            result.push(product);
        }
        
    }
    return result
}
const result =searchProducts(products, 'phone')
console.log(result);