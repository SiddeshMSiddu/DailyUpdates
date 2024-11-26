function divide(a,b){
    try{
        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Both a and b must be of type number");
        }
        if(b==0){
            throw new Error(" b cannot be zero");
        }

        console.log(a/b);
        

    }catch(error){
        console.error("Error Occured "+error.message)
    }
    finally{
        console.log("Execution completed");
        
    }
}
divide(10,2)
divide("a","f")
divide(5,"g")
