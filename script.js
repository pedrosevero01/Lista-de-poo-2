function Media(Nota1, Nota2) {
    return (Nota1 + Nota2) / 2;
}

var maior, Planilha = new Array(5);

for (var Qntd_Alunos = 0; Qntd_Alunos < 5; Qntd_Alunos++) {
    Planilha[Qntd_Alunos] = new Array(4);
    for (var Qntd_Notas = 0; Qntd_Notas < 2; Qntd_Notas++) {
        Planilha[Qntd_Alunos][Qntd_Notas] = Number(prompt("Informe a nota " + (Qntd_Notas + 1) + " do aluno " + (Qntd_Alunos + 1) + ": "));
    }
}

for (var Aluno = 0; Aluno < 5; Aluno++) {
    Planilha[Aluno][3] = Media(Planilha[Aluno][0], Planilha[Aluno][1]);
    if (Planilha[Aluno][3] >= 5) {
        console.log("Aluno " + (Aluno + 1) + " aprovado!");
        Planilha[Aluno][2] = 0;
    } else {
        console.log("Aluno " + (Aluno + 1) + " reprovado e precisa fazer a prova 3");
        Planilha[Aluno][2] = Number(prompt("Insira a nota da Av3 do Aluno " + (Aluno + 1) + ": "));
        if (Planilha[Aluno][0] >= Planilha[Aluno][1]) {
            maior = Planilha[Aluno][0];
        } else {
            maior = Planilha[Aluno][1];
        }
        Planilha[Aluno][3] = Media(Planilha[Aluno][2], maior);
    }
}

console.log("\nNotas dos alunos:");
for (var Aluno = 0; Aluno < 5; Aluno++) {
    console.log("Aluno " + (Aluno + 1) + ": ");
    for (var Nota = 0; Nota < 4; Nota++) {
        console.log(Planilha[Aluno][Nota].toFixed(1) + " ");
    }
    if (Planilha[Aluno][3] >= 5) {
        console.log(" Aluno Aprovado! ");
    } else {
        console.log(" Aluno reprovado! ");
    }
}