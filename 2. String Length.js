function solve(arr1 , arr2 , arr3)
{
    let sumLength;
    let avarageLength;
    sumLength= arr1.length+arr2.length+arr3.length;
    avarageLength = Math.floor(sumLength/3)
    console.log(sumLength)
    console.log(avarageLength)
}
solve('chocolate', 'ice cream', 'cake')