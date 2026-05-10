/* ===========================
   VALIDAÇÃO DO FORMULÁRIO
   =========================== */
const formContato = document.querySelector('#form-contato');

if (formContato) {
  const inputNome = formContato.querySelector('#nome');
  const inputEmail = formContato.querySelector('#email');
  const inputMensagem = formContato.querySelector('#mensagem');

  const erroNome = document.querySelector('#erro-nome');
  const erroEmail = document.querySelector('#erro-email');
  const erroMensagem = document.querySelector('#erro-mensagem');

  const mensagemSucesso = document.querySelector('#mensagem-sucesso');

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function exibirErro(input, span, texto) {
    input.classList.add('invalido');
    span.textContent = texto;
  }

  function limparErro(input, span) {
    input.classList.remove('invalido');
    span.textContent = '';
  }

  function validarNome() {
    if (inputNome.value.trim().length < 3) {
      exibirErro(inputNome, erroNome, 'O nome deve ter pelo menos 3 caracteres.');
      return false;
    }
    limparErro(inputNome, erroNome);
    return true;
  }

  function validarEmail() {
    if (!regexEmail.test(inputEmail.value.trim())) {
      exibirErro(inputEmail, erroEmail, 'Informe um e-mail válido.');
      return false;
    }
    limparErro(inputEmail, erroEmail);
    return true;
  }

  function validarMensagem() {
    if (inputMensagem.value.trim().length < 10) {
      exibirErro(inputMensagem, erroMensagem, 'A mensagem deve ter pelo menos 10 caracteres.');
      return false;
    }
    limparErro(inputMensagem, erroMensagem);
    return true;
  }

  inputNome.addEventListener('blur', validarNome);
  inputEmail.addEventListener('blur', validarEmail);
  inputMensagem.addEventListener('blur', validarMensagem);

  formContato.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nomeOk = validarNome();
    const emailOk = validarEmail();
    const mensagemOk = validarMensagem();

    if (!nomeOk || !emailOk || !mensagemOk) {
      return;
    }

    const dados = {
      nome: inputNome.value.trim(),
      email: inputEmail.value.trim(),
      mensagem: inputMensagem.value.trim()
    };

    console.log('Dados enviados:', dados);

    mensagemSucesso.classList.add('visivel');
    formContato.reset();

    setTimeout(() => {
      mensagemSucesso.classList.remove('visivel');
    }, 4000);
  });
}
