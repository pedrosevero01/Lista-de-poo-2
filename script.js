var Lado = new Array(3);

for (var lado = 0; lado < 3; lado++) {
    Lado[lado] = Number(prompt("Insira o Lado " + (lado + 1)));

    while (Lado[lado] <= 0) {
        Lado[lado] = Number(prompt("Valor invalido, insira o lado " + (lado + 1) + " novamente"));
    }
}

if (Lado[0] < Lado[1] + Lado[2] && Lado[1] < Lado[0] + Lado[2] && Lado[2] < Lado[0] + Lado[1]) {
    console.log("Os Valores formam um triangulo!");

    if (Lado[0] == Lado[1] && Lado[0] == Lado[2]) {
        console.log("O triangulo e Equilatero!");

    } else if (Lado[0] == Lado[1] && Lado[0] != Lado[2] || Lado[0] == Lado[2] && Lado[0] != Lado[1] || Lado[1] == Lado[2] && Lado[1] != Lado[0]) {
        console.log("O triangulo e Isoceles!");

    } else if (Lado[0] != Lado[1] && Lado[0] != Lado[2] && Lado[1] != Lado[2]) {
        console.log("O triangulo e Escaleno!");

    }

} else {
    console.log("Os Valores nao formam um triangulo!");
}