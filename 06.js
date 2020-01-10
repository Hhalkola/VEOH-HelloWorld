function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class order{
    delivered = false;

    constructor(id, message){
        this.id = id;
        this.message = message;
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

console.log('1234');
console.log(order_obj.summarize());

console.log('AAAA');
///(parametri1, parametri2) => {code}
order_obj.summarize().then((summary)=>{console.log(summary)});
console.log('HERE');
