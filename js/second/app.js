let product_name=prompt("enter your product_name:")
let product_cost_price=prompt("Enter your product's cost price")
let product_sale_price=prompt("Enter your product's sale price")
let has_discount = window.confirm(`Does ${product_name} has discount percentage?`)

if (has_discount) {
    let discount_percentage=window.prompt("Enter percentage:")
    let profit = (product_sale_price * (100 - discount_percentage) /100 ) - product_cost_price
    window.alert(profit)

}
else{
    let profit = product_sale_price - product_cost_price
    window.alert(profit)

}
