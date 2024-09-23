// 1. Write a Node.js program that creates a simple HTTP server. When a client sends a request to the server, the server should respond with a "Hello, Students!" message.

 // Simple HTTP Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Students!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});




// 2. Write a Node.js program that reads content from a file named " " and writes the content to a new file named "output.txt".

const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    fs.writeFile('output.txt', data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Content written to output.txt');
        }
    });
});




// 3. Write a Node.js program that creates an HTTP server and handles different routes. The server should respond with "Hello, World!" for the root route ("/") and "Page Not Found" for any other route.
// HTTP Server with Route Handling
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found\n');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});




// 4. Write a Node.js program that uses the OS module to retrieve information about the current operating system.
// Retrieve OS Information

const os = require('os');

console.log('Operating System:', os.type());
console.log('OS Release:', os.release());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());
console.log('CPU Architecture:', os.arch());



// 5. Write a Node.js program that uses the Path module to manipulate file paths.

 // Path Module for File Path Manipulation
const path = require('path');

const filePath = '/Users/username/Documents/file.txt';
console.log('Base Name:', path.basename(filePath));
console.log('Directory Name:', path.dirname(filePath));
console.log('File Extension:', path.extname(filePath));
console.log('Parsed Path:', path.parse(filePath));



// 6. Create a command-line Node.js program that simulates a basic calculator. The program should allow users to perform addition, subtraction, multiplication, and division operations on two numbers.
// Basic Calculator Command-Line Program


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
        rl.question('Choose operation (add, subtract, multiply, divide): ', (operation) => {
            const number1 = parseFloat(num1);
            const number2 = parseFloat(num2);
            let result;

            switch (operation) {
                case 'add':
                    result = number1 + number2;
                    break;
                case 'subtract':
                    result = number1 - number2;
                    break;
                case 'multiply':
                    result = number1 * number2;
                    break;
                case 'divide':
                    result = number2 !== 0 ? number1 / number2 : 'Cannot divide by zero';
                    break;
                default:
                    result = 'Invalid operation';
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});

