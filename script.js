  let valorTitulo =  document.getElementById("tituloPrincipal").innerText;
  console.log(valorTitulo);
  //FUNÇÃO QUE ALTERA O CONTEUDO DO TITULO
function AlterarTitulo(){
    document.getElementById("tituloPrincipal").innerHTML = "Titulo alterado com sucesso";
     window.alert("titulo alterado com sucesso");

}

function desfazerAlteracao(){
    document.getElementById("tituloPrincipal").innerHTML = valorTitulo

   
}