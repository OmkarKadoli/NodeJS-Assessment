function sum()
{
    let arr = [4, 8, 7, 13, 12]
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log("Addition of Array is : ",sum);
}
console.log(sum());

