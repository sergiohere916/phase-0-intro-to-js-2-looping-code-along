// Code your solutions in this file
function writeCards(listOfNames, event) {
    let eventMessages = [];
    for (let i=0; i < listOfNames.length; i++) {
        let currentName = listOfNames[i];
        let message = `Thank you, ${currentName}, for the wonderful ${event} gift!`;
        eventMessages.push(message);
    }
    return eventMessages;
}
function countDown(number = 15) {
    while (number >= 0) {
        console.log(number);
        number --;
    }
}
