"use strict";
// Question 1: Callbacks
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function calculate(x, y, operation, callback) {
    let result;
    switch (operation) {
        case 'add':
            result = x + y;
            break;
        case 'subtract':
            result = x - y;
            break;
        case 'multiply':
            result = x * y;
            break;
        case 'divide':
            result = x / y;
            break;
        default:
            throw new Error('Invalid operation');
    }
    // Call the callback function with the result
    callback(result);
}
// Example usage:
calculate(10, 5, 'add', (result) => {
    console.log('Result:', result);
});
// Question 2: Promises
function fetchQuestion() {
    return new Promise((resolve) => {
        // Simulating an asynchronous operation (e.g., fetching a quiz question)
        setTimeout(() => {
            const questions = ['What is the capital of France?', 'Who wrote Romeo and Juliet?', 'What is 2 + 2?'];
            const randomIndex = Math.floor(Math.random() * questions.length);
            const randomQuestion = questions[randomIndex];
            resolve(randomQuestion);
        }, 1000); // Simulating a delay of 1 second
    });
}
// Example usage:
fetchQuestion().then((question) => {
    console.log('Question:', question);
});
// Question 3: Async/Await
function waitAndGreet(name) {
    return __awaiter(this, void 0, void 0, function* () {
        // Simulating a delay using async/await
        yield new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay
        return `Hello, ${name}!`;
    });
}
// Example usage within an async function
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const greeting = yield waitAndGreet('Affan');
            console.log(greeting);
        }
        catch (error) {
            console.error('An error occurred:', error);
        }
    });
}
// Call the main function
main();
