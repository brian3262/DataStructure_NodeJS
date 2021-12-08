var f=[0,1]
function Fabonacci(n){
    // if(n<=0) return 0;
    // if(n==1) return 1;
    // return Fabonacci(n-1)+Fabonacci(n-2);
    for(i=2;i<=n;i++){
        f.push(f[i-1]+f[i-2]);
    }
    return f[n];
}
//? n > 384401000
console.log(Fabonacci(80))