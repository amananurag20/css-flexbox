function order(item,payment){
    if(payment){
        console.log( `this order ${item} is placed`)
    }else{
        console.log("Order is not placed")
    }
};

order("lunchbox",true);
order("mobile",false);

console.log(order)
