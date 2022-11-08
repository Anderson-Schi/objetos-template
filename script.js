// Exercicio 1 
/* const estudante = {
    nome: "Anderson",
    sobrenome: "Schiavoni",
    numeroMatricula: 1234,
    notasSemestre: [8, 10]
}; */

//estudante.modulo = "JavaScript"; // adcionando propriedade MODULO ao objeto.

/* console.log(estudante.nome);
console.log(estudante.notasSemestre[1]);
console.log(estudante.modulo); */

/* const copiaEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasSemestre: [...estudante.notasSemestre, 9],
    modulo: "HTML", 
}

/* console.log(estudante);
console.log(copiaEstudante); */

/* const estudantesLabenu = [];
estudantesLabenu.push(estudante);
estudantesLabenu.push(copiaEstudante); */

//console.log(estudantesLabenu); //acessando os objetos do array
//console.log(estudantesLabenu[0].nome)// acessando uma propriedade especifica do objeto dentro do array
//console.log(estudantesLabenu[1].modulo)// acesso outra propriedade especifica de objeto dentro do array

//Exercicio de Fixacao

const carrinho = {
        nome: "", 
        pagamento: "",
        endereco: "Dublin",

    compras: [
        {nomeProd: "Carregador USB Iphone 14", preco: 129 , qtd: 1},
        {nomeProd: "Capinha Iphone 14", preco: 60, qtd: 2},
        {nomeProd: "Iphone14 Pro Max", preco: 1399, qtd: 1}
    ] 
};

//console.log("Quantidade de produtos no carrinho",carrinho.compras.length);

const carrinhoPresente = {
    ...carrinho,
    nome: "Luara Matos",
    pagamento: "cartao - presente",

};

console.log(carrinhoPresente);