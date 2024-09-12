// read-file.js
import fs from 'fs';

// Define the function to read the file content
export function readFileContent() {
    const filePath = './file-data.txt';
    
    // Read the content of the file synchronously
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log('File Content:', content);
}
