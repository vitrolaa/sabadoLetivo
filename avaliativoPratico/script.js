const nomeProduto = document.getElementById("nomeProd");
const vo = document.getElementById("valorOri");
const vd = document.getElementById('desconto');

const valor = document.getElementById("valorFinal");
const desconto = document.getElementById("valorDesconto");
const calcularButton = document.getElementById("calcular");


function calcDesconto() {
    
    let desc = (vo.value * vd.value) / 100;
    
    let final = vo.value - desc;
    
    nome.innerHTML = `Produto ${nomeProduto.value}`;
    desconto.innerHTML = `Valor de desconto recebido: R$ ${desc.toFixed(2)}`;
    valor.innerHTML = `Valor final: R$ ${final.toFixed(2)}`;

}