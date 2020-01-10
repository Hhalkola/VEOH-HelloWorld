function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order{
    product = [];
    delivered = false;

    constructor(id, message){
        this.id = id;
        this.message = message;
    }

    deliver_method = async () =>{
        await sleep(10000);
        this.delivered = true;
    }

    summarize = async () => {
        console.log('Start summarize');
        //Simulate database delay or heavy calculation

        await sleep(2000);
        let summary = 
    'order id: ' + " " + this.id + " " +
    'message: ' + " " + this.message + " " +
    'delivered: ' + " " + this.delivered;

    add_product = (product) => {
        this.product.push(product);
    } 
    console.log('End summarize');
    return summary;
    }
}
//Create new order
let order_obj = new order(1234, 'Second order');
order_obj.add_product('coffee');
order_obj.add_product('milk');

//Call method with 1000ms delay and convert delivered status to true
order_obj.deliver_method().then(() =>{
    console.log('Delivered');
    return order_obj.summarize();
}).then((summary)=>{console.log(summary)});
