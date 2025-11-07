function Pessoa(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function () {
        return new Date().getUTCFullYear() - this.anoDeNascimento;
    };
};

const pessoa1 = new Pessoa("Joaozinho", 1930, "Aposentado");
pessoa1.anoDeNascimento;
pessoa1.calculaIdade();

// Alterando a idade da pessoa
pessoa1.anoDeNascimento = 1983;

// criando classes
class Pessoa{
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    ola(){
        console.log("Olá, eu sou "+ this.nome);
    };

    calculaIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }; 

}
// classe com herança
class Estudante extends Pessoa {
    nota = [];
    #matricula; //# privamos a variavel
    constructor(nome, anoDeNascimento, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.#matricula = matricula;
    };
getMatricula(){
    return this.#matricula;
};

setMatricula(valor){
    this.#matricula = valor;
};

    ola() {
        super.ola();
        console.log("Colegas");
    }

    addNota(nota){
        this.nota.push(nota);
    }
}


const aluno5 = new Estudante("Julio", 1999, 3424896);
aluno5.getMatricula();

const aluno6 = new Estudante("Julio", 1999, {numero: 192819, modalidade: "Regular"});
aluno6.getMatricula();
aluno6.nota = [new Nota("OO",10), new Nota("Algoritmos",8), new Nota("Calculo",7)];

let MatriculafoALuno6 = aluno6.getMatricula();
MatriculafoALuno6.modalidade = "Busted";

class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    };
}

const pessoa2 = new Pessoa("João", 2000, "Estudante");
pessoa2.ola();

const aluno1 = new Estudante("Julio", 1990, 3423488);

aluno1.matricula;

const prof1 = new Professor('Marta', 1985, 'Mestre');

class ValidadorCPF{
   static validar(cpf, tamanho){
    if(tamanho == 11){
        return true;
    }else {
        false;
    };
   }; 
}

validadorCPF.validar("85236965",10);

class Nota {
    #grau;
    constructor (disciplina, grau){
        this.disciplina = disciplina;
        this.#grau = grau;
    };
    setGrau(valor){
        if(valor < 0 || valor > 10){
            throw new Error();
        }
        this.#grau = valor;
    };
    getGrau(){
        return this.#grau;
    }
};
