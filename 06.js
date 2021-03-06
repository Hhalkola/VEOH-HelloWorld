function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order{
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
        const summary = 
    'order id: ' + " " + this.id + " " +
    'message: ' + " " + this.message + " " +
    'delivered: ' + " " + this.delivered;
    console.log('End summarize');
    return summary;
    }
}
//Create new order
let order_obj = new order(1234, 'Second order');

//Call method with 1000ms delay and convert delivered status to true
order_obj.deliver_method().then(() =>{
    console.log('Delivered');
    return order_obj.summarize();
}).then((summary)=>{console.log(summary)});
