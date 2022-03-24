function print_page() {
    let area_especifica = document.getElementById("saida").innerHTML;
    let area_original = document.body.innerHTML;
    document.body.innerHTML = area_especifica;
    window.print();
    document.body.innerHTML = area_original;

}

function show() {

    var str = document.getElementById('nomearquiv').value

    str = str.replace(/^\s+|\s+$/g, ''); // remover espaco do comeco e do fim
    str = str.toLowerCase();
    
    // remover acentuacao
    var from = "ãàáäâèéëêìíïîòóöõôùúüûñç·/_,:;";
    var to   = "aaaaaeeeeiiiiooooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
  
    str = str.replace(/[^a-z0-9 -]/g, '') // remover caracteres inválidos
      .replace(/\s+/g, '-') // Remover espaços
      .replace(/-+/g, ''); //Remover traços

    document.title = str;
    document.querySelector("[name='diretorio']").value = '<!--Gerar PDF--><a href="https://www.gov.br/pt-br/campanhas/nosso-brasil/saiba-tudo/documentos/' + str + '.pdf" download target="_blank" title="Baixar PDF"><span class="fas fa-print" style="font-size: 22px; color: #2980F2; padding: 5px"> </span></a>'

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
