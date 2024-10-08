const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor-deposito');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value} `;

    formEvalido = validaNome(nomeBeneficiario.value);
    if (formEvalido) {
        alert (mensagemSucesso);

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else  {
        alert("O nome não está completo");
    }
})

console.log(form);
