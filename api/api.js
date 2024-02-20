let buscarCep = async () => {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let resposta = await fetch(url);
    let respostaJSON = await resposta.json();
    document.getElementById("logradouro").value = respostaJSON.logradouro;
    document.getElementById("bairro").value = respostaJSON.bairro;
    document.getElementById("localidade").value = respostaJSON.localidade;
    document.getElementById("estado").value = respostaJSON.uf;
    document.getElementById("pais").value = "Brasil"; // Considerando que seja sempre Brasil
  }

