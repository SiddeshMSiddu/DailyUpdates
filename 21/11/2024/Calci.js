function calci(oper1,op,oper2){
    switch(op){
        case '+':console.log(oper1+oper2);
                break;
        case '-':console.log(oper1-oper2);
                break;
        case '*':console.log(oper1*oper2);
                break;
        case '/':console.log(oper1/oper2);
                break;
        case '%':console.log(oper1%oper2);
                break;
    }
}

calci(10,'/',2);