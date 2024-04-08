// Code your solutions in this file

function writeCards(array, event){
    let newArray = []
    for (let i = 0; i < array.length; i++){
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
    }
    return newArray;
}

function countDown(){
    let i = 10;
    while (i > -1){
        console.log(i)
    i--
    }
}