/* function nFactorial(n) {

    if (n < 1) {
       return 0;
    }
    if (n < 2) {
       return 1;
    }
    return n * nFactorial(n-1);
 }

 console.log(nFactorial(4))
 */


 function nFibonacci(n) {
    if(n < 2) {
        return n;
    }
    return nFibonacci(n-2) + nFibonacci(n-1);
 }

 console.log(nFibonacci(6))
