try{
    let result=10/0;
    if(!isFinite(result)){
        throw new Error("Division By zero is infinite");
    }
    console.log(result);
    
}
catch(error){
    console.error("Error Occured "+error.message);
    
}
finally{
    console.log("Excution completed");
    
}