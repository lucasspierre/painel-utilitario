function printar() {
    let area_especifica = document.getElementById("saida").innerHTML;
    let area_original = document.body.innerHTML;
    document.body.innerHTML = area_especifica;
    window.print();
    document.body.innerHTML = area_original;

}
///document.title = "⠀"
function exibir() {
    ///var url = document.getElementById("url").value;
    var conteudo = document.getElementById("conteudo").value;

    document.getElementById("saida").innerHTML = '<div class="container-md" style="text-align: justify;">' + conteudo + '</div>'
}

function resetar() {
    window.location.href = window.location.href
}