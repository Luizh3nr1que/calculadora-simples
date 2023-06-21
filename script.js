const soma = document.querySelector('#soma');
const subtracao = document.querySelector('#subtracao');
const vezes = document.querySelector('#vezes');
const divisao = document.querySelector('#divisao');
const resposta = document.querySelector('.resposta');
const clear = document.querySelector('.clear');


soma.addEventListener('click', () => {
    const input1 = document.querySelector('#namber1').value;
    const input2 = document.querySelector('#namber2').value;

    const result = Number(input1) + Number(input2);

    resposta.innerHTML = result;


});

subtracao.addEventListener('click', () => {
    const input1 = document.querySelector('#namber1').value;
    const input2 = document.querySelector('#namber2').value;

    const result = Number(input1) - Number(input2);

    resposta.innerHTML = result;
});

vezes.addEventListener('click', () => {
    const input1 = document.querySelector('#namber1').value;
    const input2 = document.querySelector('#namber2').value;

    const result = Number(input1) * Number(input2);

    resposta.innerHTML = result;
});

divisao.addEventListener('click', () => {
    const input1 = document.querySelector('#namber1').value;
    const input2 = document.querySelector('#namber2').value;

    const result = Number(input1) / Number(input2);

    resposta.innerHTML = result.toFixed(5);;
});

clear.addEventListener('click', () => {
    const input1 = document.querySelector('#namber1').value = '';
    const input2 = document.querySelector('#namber2').value = '';
    resposta.innerHTML = '';

});