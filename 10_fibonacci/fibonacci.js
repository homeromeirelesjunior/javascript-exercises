const fibonacci = function(n) {
    if (n < 0)  return "OOPS";
    n = Number(n);
    if (n <= 1) return n;
  
    let fibAnterior = 1;
    let fibAtual = 1;
    
    for (let i = 2; i < n; i++) {
      let temp = fibAtual;
      fibAtual = fibAnterior + fibAtual;
      fibAnterior = temp;
    }
    
    return fibAtual;
};

// Do not edit below this line
module.exports = fibonacci;
