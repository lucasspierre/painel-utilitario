function print() {
    let area_especifica = document.getElementById("saida").innerHTML;
    let area_original = document.body.innerHTML;
    document.body.innerHTML = area_especifica;
    window.print();
    document.body.innerHTML = area_original;

}
///document.title = "⠀"

function show() {
    var url = document.getElementById("urlimagem").value;
    var conteudo = document.getElementById("conteudo").value;
    document.getElementById("saida").innerHTML = '<div class="container-md" style="text-align: justify;"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 400;" src="' + url + 'class="mx-auto d-block" style="max-width: 100%; height: 400;">' + conteudo + '</div>'
}

function reset() {
    window.location.href = window.location.href
}

function verify(input) {
    document.getElementById('btnEnvia').disabled = (input.value.length == 0);
}
