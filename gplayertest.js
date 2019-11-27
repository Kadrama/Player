var limpa = document.getElementsByClassName("limpa");
var divResultado = document.getElementById("divResultado");
var elBotao = document.getElementById("botao");
var elFilme = document.getElementById("filme");
var elQualidade = document.getElementById("qualidades");
var elPoster = document.getElementById("poster");
var elNome = document.getElementById("nome");
var elLegenda = document.getElementById("legenda");

var eelLegenda = document.getElementById("legendaE");

var elidiomaL = document.getElementById("idiomaL");

var elidiomaE = document.getElementById("idiomaE");

var elAutoplay = document.getElementById("autoplay");
var elIframe = document.getElementById("iframe");
var elLink = document.getElementById("link");
var elLinkResultado = document.getElementById("linkResultado");
var elHtmlResultado = document.getElementById("htmlResultado");
var elHtml = document.getElementById("html");
var elTamanhoB = document.getElementsByName("tamanhoB");
var elPosterS = document.getElementById("posterS");
var elBotaoS = document.getElementById("botaoS");
var elLegendaS = document.getElementById("legendaS");
var gPoster = document.getElementById("gPoster");
var gBotao = document.getElementById("gBotao");
var gLegenda = document.getElementById("gLegenda");
var indexTamanho = "";
var autoplay = "";
var filme = "";
var poster = "";
var nome = "";
var legenda = "";
var legendaE = "";
var idiomaL = "";
var idiomaE = "";
var link = "";
var img = "";
var tamahnoB = "";

function teste(teste) {
    if (teste === "true") {
        return true;
    } else {
        return false;
    }
}

function tHabilita(x) {
    if (x.checked) {
        return "";
    } else {
        return "display:none";
    }
}

function habilita(oque) {
    gPoster.style = tHabilita(elPosterS);
    gLegenda.style = tHabilita(elLegendaS);
    limpar(oque);
}

function habilitaInicio() {
    gPoster.style = tHabilita(elPosterS);
    gLegenda.style = tHabilita(elLegendaS);
    gBotao.style = tHabilita(elBotaoS);
}

function ifra(c) {
    if (c.checked) {
        gBotao.style = "";
        elBotaoS.checked = true;
    }
}

function b(c) {
    if (c.checked) {
        if (!elIframe.checked) {
            gBotao.style = "";
        } 
    } else {
        if (elIframe.checked) {
            elIframe.checked = false;
        }
        gBotao.style = "display:none";
    }
}

if (localStorage.getItem("botao") !== null) {
    elBotao.value = localStorage.getItem("botao");
}

if (localStorage.getItem("tamanho") !== null) {
    elTamanhoB[localStorage.getItem("tamanho")].checked = true;
}

if (localStorage.getItem("autoplay") !== null) {
    elAutoplay.checked = teste(localStorage.getItem("autoplay"));
}

if (localStorage.getItem("iframe") !== null) {
    elIframe.checked = teste(localStorage.getItem("iframe"));
}

if (localStorage.getItem("botaoC") !== null) {
    elBotaoS.checked = teste(localStorage.getItem("botaoC"));
}

if (localStorage.getItem("legenda") !== null) {
    elLegendaS.checked = teste(localStorage.getItem("legenda"));
}

if (localStorage.getItem("poster") !== null) {
    elPosterS.checked = teste(localStorage.getItem("poster"));
}

habilitaInicio();

function ocultar() {
    divResultado.style = "display:none";
    elLinkResultado.style = "display:none";
    elHtmlResultado.style = "display:none";
}

function limpar(oque) {
    if (oque === "p") {
        limpa[2].value = "";
    } else if (oque === "l") {
        limpa[3].value = "";
    } else {
        for (i = 0; i < limpa.length; i++) {
            limpa[i].value = "";
        }
        ocultar();
    } 
}

function gerar() {

    for (i = 0; i < elTamanhoB.length; i++) {
        if (elTamanhoB[i].checked) {
            tamanhoB = elTamanhoB[i].value;
            indexTamanho = i;
        }
    }

    if (tamanhoB === "p") {
        img =  'height="61" width="200"';
    } else if (tamanhoB === "m"){
        img = 'height="98" width="320"';
    } else if (tamanhoB === "g") {
        img = 'height="123" width="400"';
    } else {
        img = "";
    }

    if (elAutoplay.checked === true) {
        autoplay = "z+auto";
    }

    if (elFilme.value !== "") {
        filme = "playz=" + elFilme.value.replace(/(=).*/,"");			
    }
    
    if (elPoster.value !== "") {
        poster = "z+posterz=" + elPoster.value;	
    }
    if (elNome.value !== "") {
        nome = "z+nomez=" + encodeURI(elNome.value);	
    }
    if (elLegenda.value && eelLegenda !== "") {
        legenda = "z+legendaz=" + elLegenda.value;
        
        legendaE = "z+legendaEz" + eelLegenda.value;
        
        if (elidiomaL.selectedIndex === 0) {
            idiomaL = "z+idiomaz=pt";
        } else if (elidiomaL.selectedIndex === 1) {
            idiomaL = "z+idiomaz=en";
        } else if (elidiomaL.selectedIndex === 2) {
            idiomaL = "z+idiomaz=sp";
        } else {
            idiomaL = "";
        }
        
         if (elidiomaE.selectedIndex === 0) {
            idiomaE = "z+idiomaEz=pt";
        } else if (elidiomaE.selectedIndex === 1) {
            idiomaE = "z+idiomaEz=en";
        } else if (elidiomaE.selectedIndex === 2) {
            idiomaE = "z+idiomaEz=sp";
        } else {
            idiomaE = "";
        }
        
    }
    if (elFilme.value === "" || elNome.value === "" ) {
        ocultar();
        return false;
    }
    if (filme !== "") {
        if (elQualidade.selectedIndex === 0) {
            qualidade = "z+q1080q720q360";
        } else if (elQualidade.selectedIndex === 1) {
            qualidade = "z+q720q360";
        } else if (elQualidade.selectedIndex === 2) {
            qualidade = "z+q360";
        }
    } else {
        qualidade = "";
    }
    
    link = "https://kado-player011.blogspot.com/2019/07/KaDO-Player.html#" + filme + nome + poster + legenda + idiomaL + legendaE + idiomaE + autoplay + qualidade;
    if (elIframe.checked === false) {
        if (elBotao.value === "" || !elBotaoS.checked) {
            ocultar();
            elLink.value = link;
            elLinkResultado.style = "";
        } else {
            ocultar();
            elHtml.value = '<a target="_blank" href="' + link + '">\
                                <img ' + img + 'src="' +  elBotao.value +'">\
                            </a>';
            elHtmlResultado.style = "";
             
        }
        
    } else {
        if (elBotao.value === "") {
            ocultar();
            return false;
        } else {
            ocultar();
            elHtml.value = '<link rel="stylesheet" type="text/css" href="https://kadrama.github.io/Player/jquery.fancybox.min.css">\
                            <a data-fancybox data-type="iframe" data-src="' + link + '" href="javascript:;">\
                                <img ' + img + 'src="' + elBotao.value + '">\
                            </a>\
                            <script src="https://kadrama.github.io/Player/jquery.min.js"></script>\
                            <script src="https://kadrama.github.io/Player/jquery.fancybox.min.js"></script>';
            elHtmlResultado.style = "";
        }
    }
    divResultado.style = "";
    copiar();
}

function copiar() {
    if (!elBotaoS.checked) {
        elLink.select();
    } else {
        elHtml.select();
    }
    document.execCommand("copy");
}


function help(){
    $('#alertaModal').modal('hide');
    $("#alertamodal").modal();
}

window.onbeforeunload = function() {
    for (i = 0; i < elTamanhoB.length; i++) {
        if (elTamanhoB[i].checked) {
            indexTamanho = i;
        }
    }
    localStorage.setItem("botao", elBotao.value);
    localStorage.setItem("tamanho", indexTamanho);
    localStorage.setItem("autoplay", elAutoplay.checked);
    localStorage.setItem("iframe", elIframe.checked);
    if (elIframe.checked) {
        localStorage.setItem("botaoC", "true");
    } else {
        localStorage.setItem("botaoC", elBotaoS.checked);
    }
    localStorage.setItem("poster", elPosterS.checked);
    localStorage.setItem("legenda", elLegendaS.checked);
    localStorage.setItem("legendaE", elLegendaS.checked);
}
