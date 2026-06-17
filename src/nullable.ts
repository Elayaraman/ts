function greet(userName:string|null){
    if(userName === null){
        console.log("Hello Guest");
    }else{
        console.log("Hello "+userName);
    }

}