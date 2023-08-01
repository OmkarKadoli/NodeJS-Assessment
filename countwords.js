const fs = require('fs');

function count()
{
    const data = fs.readFileSync('./data.txt', 'utf-8');
    const len = data.length;
    console.log("Total Number of Words is:",len);
}
console.log(count());
