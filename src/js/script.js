///Print Page

function print_page() {
    let area_especifica = document.getElementById("pdfdocout").innerHTML;
    let area_original = document.body.innerHTML;
    document.body.innerHTML = area_especifica;
    window.print();
    document.body.innerHTML = area_original;
}

///Saida gerador de pdf

function dataOutPdf() {

    var str = document.getElementById('titledoc').value

    str = str.replace(/^\s+|\s+$/g, ''); // remover espaco do comeco e do fim
    str = str.toLowerCase();
    str = str.normalize("NFD"); // retira acentos e caracteres especiais
    str = str.replace(/[^a-z0-9 -]/g, '') // remover caracteres inválidos
        .replace(/\s+/g, '-') // Remover espaços
    //.replace(/[- ]+/g, "-"); //Remover traços duplos

    document.title = str;
    document.querySelector("[name='diretory']").value = `<!--Gerar PDF-->
    <a href="https://www.gov.br/pt-br/campanhas/nosso-brasil/saiba-tudo/documentos/` + str + `.pdf" download target="_blank" title="Baixar PDF"><span class="fas fa-print fa-lg text-info pr-1"> </span></a>`
    var url = document.getElementById("imageurl").value;
    var url2 = document.getElementById("imageurl2").value;
    var url3 = document.getElementById("imageurl3").value;
    var url4 = document.getElementById("imageurl4").value;
    var conteudo = document.getElementById("textdoc").value;
    ///nenhuma imagem
    if ("" === url) {
        return document.getElementById("pdfdocout").innerHTML = '<div class="container-md" style="text-align: justify;">' + conteudo + '</div>'
        ///uma imagem
    } else if ("" !== url && "" === url2 && "" === url3 && "" === url4) {
        return document.getElementById("pdfdocout").innerHTML = '<div class="container-md" style="text-align: justify;"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 400;" src="' + url + '">' + conteudo + '</div>'
        ///duas imagens
    } else if ("" !== url2 && url !== "" && "" === url3 && "" === url4) {
        return document.getElementById("pdfdocout").innerHTML = '<div class="container-md" style="text-align: justify;"><div class="row"><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350;" src="' + url + '"></div><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350;" src="' + url2 + '"></div></div>' + conteudo + '</div>'
        ///tres imagens
    } else if ("" !== url2 && url !== "" && "" !== url3 && "" === url4) {
        return document.getElementById("pdfdocout").innerHTML = '<div class="container-md" style="text-align: justify;"><div class="row"><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url + '"></div><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url2 + '"></div></div><br><div class="row"><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url3 + '"></div></div>' + conteudo + '</div>'
    } else if ("" !== url2 && url !== "" && "" !== url3 && "" !== url4) {
        ///quatro imagens
        return document.getElementById("pdfdocout").innerHTML = '<div class="container-md" style="text-align: justify;"><div class="row"><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url + '"></div><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url2 + '"></div></div><br><div class="row"><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url3 + '"></div><div class="col"><img class="rounded mx-auto d-block" style="max-width: 100%; height: 350px;" src="' + url4 + '"></div></div>' + conteudo + '</div>'
    }

}

///Resetar página

function reset() {
    window.location.href = window.location.href
}

///Copiar diretorio

function selectcopyDoc() {
    var diretoryDoc = document.getElementById("diretory");
    diretoryDoc.select();
    document.execCommand("copy");
    document.getElementById("generatepdf").disabled = false;
}

///Copiar url redes

function selectcopyUrl() {
    var urlGenerate = document.getElementById("allPageOut");
    urlGenerate.select();
    document.execCommand("copy");
}

///Copiar url Facebook

function selectcopyFacebook() {
    var urlGenerateFacebook = document.getElementById("facebookOut");
    urlGenerateFacebook.select();
    document.execCommand("copy");
}

///Copiar url Twitter

function selectcopyTwitter() {
    var urlGenerateFacebook = document.getElementById("twitterOut");
    urlGenerateFacebook.select();
    document.execCommand("copy");
}

///Copiar url whatsapp

function selectcopyWhatsapp() {
    var urlGenerateFacebook = document.getElementById("whatsappOut");
    urlGenerateFacebook.select();
    document.execCommand("copy");
}

///validar gerador de link

$(document).ready(function () {
    $('#btnLink').prop('disabled', true);

    function validateUrlPagina() {
        var buttonDisabled = $('#urlpage').val().trim() === '';
        $('#btnLink').prop('disabled', buttonDisabled);
    }

    $('#urlpage').on('keyup', validateUrlPagina);
});

///validar gerador de pdf

$(document).ready(function () {
    $('#btnPdf').prop('disabled', true);

    function validateDocpage() {
        var buttonDisabled = $('#titledoc').val().trim() === '' || $('#textdoc').val().trim() === '';
        $('#btnPdf').prop('disabled', buttonDisabled);
    }

    $('#titledoc').on('keyup', validateDocpage);
    $('#textdoc').on('keyup', validateDocpage);
});

///Collapse buttons

function collapbtn() {
    $('.collapse').collapse('show');
    $('.collapse').collapse('hide');
    $('#btn').find("i").toggleClass("fa-minus-circle fa-plus-circle");
}

///Saida gerador de codigo

function dataOutUrl() {
    var url = document.getElementById("urlpage").value;
    var conteudo = document.getElementById("textpage").value;

    document.getElementById('allPageOut').innerText =
        `<!--Facebook-->
<a href="https://www.facebook.com/sharer.php?u=` + url + `&quote=` + conteudo + `"target="_blank" title="Facebook"><span class="fab fa-facebook-f fa-lg text-info pr-1"> </span></a>
<!--Twitter-->
<a href="https://twitter.com/share?text=` + conteudo + `&url=` + url + `"target="_blank" title="Twitter"><span class="fab fa-twitter fa-lg text-info pr-1"> </span></a>
<!--Whatsapp-->
<a href="https://api.whatsapp.com/send?text=` + conteudo + " " + url + `"target="_blank" title="Whatsapp"><span class="fab fa-whatsapp fa-lg text-info pr-1"> </span></a>`

    document.getElementById('facebookOut').innerText =
        `<!--Facebook-->
<a href="https://www.facebook.com/sharer.php?u=` + url + `&quote=` + conteudo + `"target="_blank" title="Facebook"><span class="fab fa-facebook-f fa-lg text-info pr-1"> </span></a>`

    document.getElementById('twitterOut').innerText =
        `<!--Twitter-->
<a href="https://twitter.com/share?text=` + conteudo + `&url=` + url + `"target="_blank" title="Twitter"><span class="fab fa-twitter fa-lg text-info pr-1"> </span></a>`

    document.getElementById('whatsappOut').innerText =
        `<!--Whatsapp-->
<a href="https://api.whatsapp.com/send?text=` + conteudo + " " + url + `"target="_blank" title="Whatsapp"><span class="fab fa-whatsapp fa-lg text-info pr-1"> </span></a>`
}

///contador
function contadorTempo() {
    var hoje = new Date(Date.now()).getTime();
    let dataEvento = new Date('03/28/2023 16:36:00').getTime();
    var t = Math.floor(dataEvento - hoje);

    var segundos = Math.floor((t % (1000 * 60)) / 1000);
    var minutos = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var horas = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var dias = Math.floor(t / (1000 * 60 * 60 * 24));
    if (t > 0) {
        document.getElementById("dias").innerHTML = dias.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
        document.getElementById("horas").innerHTML = horas.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
        document.getElementById("minutos").innerHTML = minutos.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
        document.getElementById("segundos").innerHTML = segundos.toLocaleString('pt-BR', { minimumIntegerDigits: 2, useGrouping: false });
    } else {
        document.getElementById("dias").innerHTML = "00";
        document.getElementById("horas").innerHTML = "00";
        document.getElementById("minutos").innerHTML = "00";
        document.getElementById("segundos").innerHTML = "00";
    }
}
contadorTempo();
setInterval(contadorTempo, 1000);
