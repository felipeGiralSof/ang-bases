const EventEmitter = require("events");

process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
process.stdin.on("data", function (chunk) {
  console.log("chunk",chunk);
  input += chunk;
});





const emitter = new EventEmitter();

function extractNumbers(input) {
    const [n1, n2] = input.trim().split(" ").map(Number);
    return {n1, n2};
}

function calculateMultiplesSum(n1, n2){

    return new Promise((resolve) => {
        let sum = 0;

        setTimeout(() => {
                for(let i = 1; i <= 1000; i++){
                if(i % n1 === 0 || i % n2 === 0){
                    sum += i;
                }
            }
            resolve(sum);
        }, 2000);
    });
}

emitter.on("MyEvent", () => {
    //;
    emitter.emit("LogComplete")
})

process.stdin.on("end", function () {

    // Enter your code here
    console.log("input", input);
    const {n1, n2} = extractNumbers(input);

    calculateMultiplesSum(n1, n2)
        .then((sum)=> {

        }).catch((err) => {
            console.error('Error', err);
        })


    emitter.on("LogComplete", () => {
        console.log(`Multiples of ${n1} & ${n2}\n${sum()}`)
    });
});
