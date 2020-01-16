function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

class worker{
    constructor (n_food)
    {
        this.n_food = n_food;
    }

    do_work = async () => {
        if (this.n_food < 0)
        {
            console.log('Error');
        }
        else
        {
            await sleep (5000)
            this.n_food = this.n_food -1;           
        }
    }
}
let work = new worker(5);
work.do_work().then(() => {
    console.log(work.n_food);
}).then(() => {
    console.log('Job done');
});
