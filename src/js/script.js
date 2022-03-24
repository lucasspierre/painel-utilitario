function print_page() {
    let area_especifica = document.getElementById("saida").innerHTML;
    let area_original = document.body.innerHTML;
    document.body.innerHTML = area_especifica;
    window.print();
    document.body.innerHTML = area_original;

}

function show() {
    var str = document.getElementById('nomearquiv').value
    var titulo = str.replace(/\s+/g, '-').toLowerCase();
    document.title = titulo;

    document.querySelector("[name='diretorio']").value = '<!--Gerar PDF--><a href="https://www.gov.br/pt-br/campanhas/nosso-brasil/saiba-tudo/documentos/' + titulo + '.pdf" download target="_blank" title="Baixar PDF"><span class="fas fa-print" style="font-size: 22px; color: #2980F2; padding: 5px"> </span></a>'

    var url = document.getElementById("urlimagem").value;
    var conteudo = document.getElementById("conteudo").value;

    if ("" == url) {
        return document.getElementById("saida").innerHTML = '<div class="container-md" style="text-align: justify;">' + conteudo + '</div>'
    } else {
        return document.getElementById("saida").innerHTML = '<div class="container-md" style="text-align: justify;"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 400;" src="' + url + '"class="mx-auto d-block" style="max-width: 100%; height: 400;">' + conteudo + '</div>'
    }
}

function reset() {
    window.location.href = window.location.href
}

function verify(input) {
    document.getElementById('btnEnvia').disabled = (input.value.length == 0);
}

function selectcopy() {
    var copyText = document.getElementById("diretorio");
    copyText.select();
    document.execCommand("copy");
}
