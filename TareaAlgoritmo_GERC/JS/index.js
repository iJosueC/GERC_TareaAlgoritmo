class Ejercicios {
  limpiar() {
    document.getElementById("resp").value = "";
  }
  //Funciones
  sPerfect(arreglo) {
    let sumaNumerosPerfectos = 0;
    let long = arreglo.length;
    for (let pos = 0; pos < long; pos++) {
      let div = 1,
        sumadiv = 0;
      while (div < arreglo[pos]) {
        if (arreglo[pos] % div == 0) {
          sumadiv = sumadiv + div;
        }
        div = div + 1;
      }
      if (sumadiv == arreglo[pos]) {
        sumaNumerosPerfectos = sumaNumerosPerfectos + arreglo[pos];
      }
    }
    return sumaNumerosPerfectos;
  }

  primos(arreglo) {
    let numerosPrimos = [];
    let long = arreglo.length;
    for (let pos = 0; pos < long; pos++) {
      let c = 0,
        div = 1;
      while (div <= arreglo[pos]) {
        if (arreglo[pos] % div == 0) {
          c = c + 1;
        }
        div = div + 1;
      }
      if (c <= 2) {
        numerosPrimos.push(arreglo[pos]);
      }
    }
    return numerosPrimos;
  }

  elevar(num, exponente) {
    if (Array.isArray(num)) {
      for (let i = 0; i < num.length; i++) {
        num[i] = Math.pow(num[i], num[i]);
      }
      return num;
    } else {
      return Math.pow(num, exponente);
    }
  }

  funTabla(n) {
    let resp = "";
    for (let c = 1; c <= 12; c++) {
      resp += `${n} x ${c} = ${n * c}\n`;
    }
    return resp;
  }

  sumaDigito(n) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  inNum(num) {
    let digitos = [];
    while (num > 0) {
      let digito = num % 10;
      digitos.push(digito);
      num = Math.floor(num / 10);
    }
    return digitos;
  }

  obtenerDivi(n, ni) {
    let resp = [];
    for (let i = ni; i < n; i++) {
      if (n % i === 0) {
        resp.push(i);
      }
    }
    return resp;
  }

  sumDivisores(n, ni) {
    let resp = 0;
    for (let i = ni; i < n; i++) {
      if (n % i === 0) {
        resp += i;
      }
    }
    return resp;
  }

  factorial(n) {
    if (Array.isArray(n)) {
      let resultados = [];
      for (let i = 0; i < n.length; i++) {
        let resultado = 1;
        for (let j = 1; j <= n[i]; j++) {
          resultado *= j;
        }
        resultados.push(resultado);
      }
      return resultados;
    } else {
      let resultado = 1;
      for (let i = 1; i <= n; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }

  numRango(n, n2) {
    let resultado = [];
    for (let i = n; i < n2; i++) {
      resultado.push(i);
    }
    return resultado;
  }

  numUlPr(n, pos) {
    let resp = 0;
    let divisor = 1;
    if (pos === 0) {
      resp = n % 10;
    } else if (pos === 1) {
      while (n >= divisor * 10) {
        divisor *= 10;
      }
      resp = parseInt(n / divisor);
    }
    return resp;
  }

  pares(num) {
    const pares = [];
    let digito;
    while (num > 0) {
      digito = num % 10;
      if (digito % 2 === 0) {
        pares.push(digito);
      }
      num = Math.floor(num / 10);
    }
    return pares.reverse();
  }

  // Ejercicios ///

  //Ejercicio 1 
  sumPerfect(){
    let d = document
    let array = [6,24,25,28]
    let resp = this.sPerfect(array)
    d.getElementById('resp').textContent = `La suma es: ${resp}`
  }
  //Ejercicio 2 
  numPrimos(){
    let d =document
    let array = [6,5,25,7,28]
    let resp = this.primos(array)
    d.getElementById('resp').textContent  = `Los numeros primos: ${resp}`
  }
  //Ejercicio 3
  nElevado() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let num2 = parseInt(d.getElementById("num2").value);
    let resp = this.elevar(num1, num2);
    d.getElementById(
      "resp"
    ).textContent = ` El numero ${num1} elevado al exponente ${num2} es: ${resp}`;
  }
  //Ejercicio 4 
  nEArray() {
    let d = document;
    let array = [4,3,2,5];
    let resp = this.elevar(array);
    d.getElementById("resp").textContent = ` ${resp}`;
  }
  //Ejercicio 5
  tabla() {
    let d = document;
    let base = parseInt(d.getElementById("base").value);
    let tabla = this.funTabla(base);
    d.getElementById("resp").textContent = `Tabla: \n${tabla}`;
  }

  //Ejercicio 6
  arrayDivisor() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let num2 = parseInt(d.getElementById("num2").value);
    let resp = this.obtenerDivi(num1, num2);
    d.getElementById(
      "resp"
    ).textContent = `Los divisores del numero ${num1}: [${resp}]`;
  }

  //Ejercicio 7
  sumDivisor() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let num2 = parseInt(d.getElementById("num2").value);
    let resp = this.sumDivisores(num1, num2);
    d.getElementById(
      "resp"
    ).textContent = `La suma de los divisores es: ${resp}`;
  }
  //Ejercicio 8
  numArray(){
    let d = document
    let num1 = parseInt(d.getElementById('num1').value)
    let resp = this.inNum(num1)
    d.getElementById('resp').textContent = `${resp}`
  }
  //Ejercicio 9
  sDigito() {
    let d = document;
    let n1 = parseInt(d.getElementById("n1").value);
    let resp = this.sumaDigito(n1);
    d.getElementById("resp").textContent = `La suma del numero: ${resp}`;
  }

  //Ejercicio 10
  digPar() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let resp = this.pares(num1)
    d.getElementById('resp').textContent = `Los numeros pares del digito ${num1} son: ${resp}`
  }

  //Ejercicio 11
  pNum() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let resp = this.numUlPr(num1, 1);
    d.getElementById(
      "resp"
    ).textContent = `El primer numero del digito es: ${resp}`;
  }
  //Ejercicio 12
  ulNum() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let resp = this.numUlPr(num1, 0);
    d.getElementById(
      "resp"
    ).textContent = `El ultimo numero del digito es: ${resp}`;
  }
  //Ejercicio 13
  factorial2() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let resp = this.factorial(num1);
    d.getElementById("resp").textContent = `El factorial de ${num1} es ${resp}`;
  }

  //Ejercicio 14
  facAray() {
    let d = document;
    let arra = [3, 2, 4];
    let resp = this.factorial(arra);
    d.getElementById("resp").textContent = `${resp}`;
  }
  //Ejercicio 15
  arrayRango() {
    let d = document;
    let num1 = parseInt(d.getElementById("num1").value);
    let num2 = parseInt(d.getElementById("num2").value);
    let resp = this.numRango(num1, num2);
    d.getElementById("resp").textContent = `[${resp}]`;
  }
}
let ejer = new Ejercicios();
