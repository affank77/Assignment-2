// Question 1: Callbacks

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(x: number, y: number, operation: Operation, callback: (result: number) => void): void {
    let result: number;

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

function fetchQuestion(): Promise<string> {
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

async function waitAndGreet(name: string): Promise<string> {
    // Simulating a delay using async/await
    await new Promise(resolve => setTimeout(resolve, 2000)); // 2 seconds delay

    return `Hello, ${name}!`;
}

// Example usage within an async function
async function main() {
    try {
        const greeting = await waitAndGreet('Affan');
        console.log(greeting);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the main function
main();