function Fabonacci(n){
    if(n<=0) return 0;
    if(n==1) return 1;
    return Fabonacci(n-1)+Fabonacci(n-2);
}

console.log(Fabonacci(10))