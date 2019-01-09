function fib(n) {
    if(n === 0 || n === 1) {
        return n;
    }
    
    let fib0 = 0;
    let fib1 = 1;
    while(n > 0) {
        let temp = fib0 + fib1;
        fib0 = fib1;
        fib1 = temp;
        n--;
    }
    
    return fib1;
};

fib(2);
