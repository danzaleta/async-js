const sum = (a,b)=> a+b;

function calc(numA, numB, callback) {
    return callback(numA, numB);
}

//console.log(calc(6,2,sum));

function date(callback){
    console.log(new Date);

    setTimeout(function(){
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);