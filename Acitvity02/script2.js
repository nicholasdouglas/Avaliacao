var nomeGlob;
var mensagemGlob;

function confMgnEsq()
{
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    nomeGlob = nome;
    mensagemGlob = mensagem;
    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMgn").textContent = mensagem;
}

function enviar()
{
    var nTele = "554112121212";
    var linkZipzop = "https://wa.me/" + nTele + "?text=Nome: " + nomeGlob + "-" + mensagemGlob; 
    window.open(linkZipzop, "_blank");
}