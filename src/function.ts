function test(ar1: string,ar2?:number ): number{
    return +ar1;
}

function addAll(...nums:number[]):number{
 return nums.reduce((acc,cur)=>acc+cur, 0);
}

const ff = function (){

}

// :void means it doesn't return anything or return undefined

function log(val:string):void{

    setInterval(()=>{
        console.log(val);
    },1000);

}