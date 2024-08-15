//Problem no:1
function oddSumMulTable(myarray:number[]):void
{
let sum=0;
let mynum;
for(let i=0;i<myarray.length;i++)
    {
    if(myarray[i]%2!=0)
    {
        sum=sum+myarray[i];
        mynum=sum;
    }}
console.log(`sum of odd numbers in array ${myarray} is:${sum}`);
console.log(`Table of ${mynum} is:`);
for(let j=1;j<=10;j++)
{
   
    console.log(`${mynum}*${j}=${mynum*j}`);
}}
oddSumMulTable([1,2,3,4,5]);


//Problem No:2
function squareEvenNumbers(array1:number[]):number[]|number
{
    let squaredArray:number[]=[];
    let squareNum;
for(let i=0;i<array1.length;i++)
{
if(array1[i]%2==0)
{
    squareNum=array1[i]*array1[i];
    squaredArray.push(squareNum);
}}
return squaredArray;
}
console.log(squareEvenNumbers([1,5,30,9,2]));