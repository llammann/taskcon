let age= prompt("Enter your age")
let ticket_price=8
age=Number(age)
if(age<18) {
    alert("Age limite!!!")
}
else {
    alert("Welcome!!!")
    let balance= prompt("Enter your balance")
balance=Number(balance)

    if(balance< ticket_price){
        alert("your balance is low!",balance)
    }
    else {
        if (age==18){
            alert(`your balance is ${balance-=ticket_price/2}`)
        }
        else{
            alert(`your balace is ${balance-=ticket_price}`)
        }
    }
}