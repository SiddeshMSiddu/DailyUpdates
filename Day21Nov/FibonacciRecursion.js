function fibo(n) {
    if (n <= 1) {
        return n
    }
    else {
        return fibo(n - 1) + fibo(n - 2)
    }
}
function forloopfibo(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibo(i) + " ");
    }

}
forloopfibo(10)
