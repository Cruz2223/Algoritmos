function saludo() {
    alert("Hola Mundo!!");
}

function suma() {
    // Declaramos las variables necesarias
    let A = 0;
    let B = 0;
    let S = 0;
    // SOLICITAMOS LOS VALORES Y LOS ASIGNAMOS EN LAS VARIABLES
    A = parseInt(prompt("Por favor ingrese el primer valor  sumar"));
    B = parseInt(prompt("Porfavor ingrese el segundo valor"));
    // REALIZAMOS LAS OPERACIONE NECESARIOS
    S = A + B;
    // MOSTRAMOS EL RESULTADO EN PANTALLA
    alert("EL RESULTADO DE LA SUMA ES: " + S);
    console.log("El resultado de la suma es: " + S);
}

function opBasicas() {
    let N1 = 0;
    let N2 = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0;
    N1 = parseInt(prompt("Porfavor ingrese el primer valor:" ));
    N2 = parseInt(prompt("Porfavor ingrese el segundo valor:" ));
    S = N1 + N2;
    R = N1 - N2;
    M = N1 * N2;
    D = N1 / N2;
    alert("El resultado de la suma es: "+ S +" El resultado de la resta es: " + R +" El resultado de la multiplicacion es: " + M +" El resultado de la division es: " + D)
    console.log("El resultado de la suma es: "+ S +" El resultado de la resta es: " + R +" El resultado de la multiplicacion es: " + M +" El resultado de la division es: " + D)
}

function convMedias() {
    let M = 0;
    let CM = 0;
    let P = 0;
    M = parseInt(prompt("Ingrese el valor en metros: "));
    CM = M*100
    P = M*39.37
    alert("Los centimetros de su valor es: "+ CM + " y las pulgadas son: "+ P)
}

function CuadradoNum() {
    let n1,c = 0;
    n1 = parseInt(prompt("INGRESE EL VALOR: "));
    c = Math.pow(n1,2);
    alert("EL CUADRADO DEL NUMERO ES: "+ c);
}

function PromEstudiante() {
    let M ="";
    let A,B,C,D,E,F,G,P = 0;
    M = prompt("DIGITE EL NOMBRE DE LA MATERIA: ");
    A = parseInt(prompt("DIGITE LA PRIMERA NOTA: "));
    B = parseInt(prompt("DIGITE LA SEGUNDA NOTA: "));
    C = parseInt(prompt("DIGITE LA TERCERA NOTA: "));
    D = parseInt(prompt("DIGITE LA CUARTA NOTA: "));
    E = parseInt(prompt("DIGITE LA QUINTA NOTA: "));
    F = parseInt(prompt("DIGITE LA SEXTA NOTA: "));
    G = parseInt(prompt("DIGITE LA SEPTIMA NOTA: "));
    P = (A+B+C+D+E+F+G)/7;
    if (P>=6.0) {
        alert("EL ESTUDIANTE APROBO "+ M +" CON: "+P);
    } else {
        alert("EL ESTUDIANTE REPROBO "+ M +" CON: "+P);
    }
}

function MayorNum() {
    let n1,n2 = 0
    n1 = parseInt(prompt("DIGITE EL PRIMER NUMERO: "))
    n2 = parseInt(prompt("DIGITE EL SEGUNDO NUMERO: "))
    if (n1==n2) {
        alert("ERROR, LOS NUMEROS NO PUEDEN SER IGUALES")
    } else if (n1>n2) {
        alert("EL NUMERO MAYOR ES: "+n1)        
    } else {
        alert("EL NUMERO MAYOR ES: "+n2)
    }
}

function AreaT() {
    let b,a,A = 0
    b = parseInt(prompt("DIGITE LA BASE DEL TRIANGULO: "))
    a = parseInt(prompt("DIGITE LA ALTURA DEL TRIANGULO: "))
    A = (b*a)/ 2
    alert("EL AREA DEL TRIANGULO ES: "+A)
}

function Menor3Num () {
    let n1,n2,n3 = 0
    n1 = parseInt(prompt("INGRESE EL PRIMER NUMERO: "))
    n2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO: "))
    n3 = parseInt(prompt("INGRESE EL TERCER NUMERO: "))
    if (n1==n2 && n1==n3) {
        alert("ERROR, LOS NUMEROS NO PUEDEN SER IGUALES");
    } else if (n1<n2 && n1<n3) {
        alert("EL NUMERO MENOR ES: "+n1)
    } else if (n2<n1 && n2<n3) {
        alert("EL NUMERO MENOR ES: "+n2)
    } else {
        alert("EL MENOR NUMERO ES: "+n3)
    }
}
function CDT() {
function calcularInteresCompuesto(montoInicial, tasaMensual, numeroDeMeses) {
    const tasaDecimal = tasaMensual / 100;
    const montoFinal = montoInicial * Math.pow(1 + tasaDecimal, numeroDeMeses);
    return montoFinal;
  }
  let montoInicial,numeroDeMeses = 0
  montoInicial = parseInt(prompt("INGRESE EL MONTO INICIAL: "))
  numeroDeMeses = parseInt(prompt("INGRESE EL NUMERO DE MESES: "))
  const tasaMensual = 1.7;
  const montoFinal = calcularInteresCompuesto(montoInicial, tasaMensual, numeroDeMeses);
  alert("Después de " + numeroDeMeses + " meses, tendrás $" + montoFinal.toFixed(2));
   }

function AñoNacimiento() {
    let e,f,a = 0
    e = parseInt(prompt("INGRESE SU EDAD: "))
    a = parseInt(prompt("INGRESE EL AÑO ACTUAL: "))
    f = a-e
    alert("SU AÑO DE NACIMIENTO ES: "+f)
}
function ParImpar() {
    let a = 0
    a = parseInt(prompt("INGRESE UN VALOR: "))
    if (a % 2==0) {
        alert("EL NUMERO "+a+" ES PAR.") 
    } else {
        alert("EL NUMERO "+a+" ES IMPAR.")
    }   
}
function Frutas() {
    let fruta = ""
    let kilos,precio,total,totalsinDes,des = 0
    fruta = prompt("INGRESE LA FRUTA: ");
    kilos = parseInt(prompt("INGRESE LOS KILOS: "));
    precio = parseInt(prompt("INGRESE EL PRECIO: "));
    if (fruta==="manzanas") {
     
     switch (true) {
        case kilos<3:
            totalsinDes = precio*kilos;
            des = totalsinDes*0.02;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
        break;
        case kilos<6:
            totalsinDes = precio*kilos;
            des = totalsinDes*0.04;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
        break;
        case kilos<11:
            totalsinDes = precio*kilos;
            des = totalsinDes*0.10;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
        break;
        default:
            totalsinDes = precio*kilos
            des = totalsinDes*0.17;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
    } 
  } else if (fruta==="peras") {
     switch (true) {
        case kilos<3:
            totalsinDes = precio*kilos;
            des = totalsinDes*0.03;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
        break;
        case kilos<6:
            totalsinDes = precio*kilos;
            des = totalsinDes*0.06;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
        break;
        case kilos<11:
            totalsinDes = precio*kilos;
            des = totalsinDes*0.012;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);
        break;
        default:
            totalsinDes = precio*kilos
            des = totalsinDes*0.18;
            total = totalsinDes - des;
            alert("EL USUARIO DEBE PAGAR: "+ total);
            alert("EL DESCUENTO APLICADO FUE DE: "+des);  
  }
  } else if (fruta==="sandias") {
    switch (true) {
       case kilos<3:
           totalsinDes = precio*kilos;
           des = totalsinDes*0.06;
           total = totalsinDes - des;
           alert("EL USUARIO DEBE PAGAR: "+ total);
           alert("EL DESCUENTO APLICADO FUE DE: "+des);
       break;
       case kilos<6:
           totalsinDes = precio*kilos;
           des = totalsinDes*0.08;
           total = totalsinDes - des;
           alert("EL USUARIO DEBE PAGAR: "+ total);
           alert("EL DESCUENTO APLICADO FUE DE: "+des);
       break;
       case kilos<11:
           totalsinDes = precio*kilos;
           des = totalsinDes*0.015;
           total = totalsinDes - des;
           alert("EL USUARIO DEBE PAGAR: "+ total);
           alert("EL DESCUENTO APLICADO FUE DE: "+des);
       break;
       default:
           totalsinDes = precio*kilos
           des = totalsinDes*0.20;
           total = totalsinDes - des;
           alert("EL USUARIO DEBE PAGAR: "+ total);
           alert("EL DESCUENTO APLICADO FUE DE: "+des);
 }
 }
  }