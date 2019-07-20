
function obtenhaParametosDaurll() {
	// Vetor que conterá a resposta do nosso método com os parâmetros da query string.
	var parametrosDaurll = [];

	// 'chave=valor&chave=valor&chave=valor'
	var urll = window.location.hash.substring(1);
	// ['chave=valor', 'chave=valor', 'chave=valor']
	var parametrosJuntoComValores = urll.split("z+");
	
	for (var i = 0; i < parametrosJuntoComValores.length; i++) {
		var parametroComValor = parametrosJuntoComValores[i];
		
		// ['chave', 'valor']
		var parametroSeparadoDoValor = parametroComValor.split('z=');
		
		/*
			[
				{chave: 'chave', valor: 'valor'},
				{chave: 'chave', valor: 'valor'},
				{chave: 'chave', valor: 'valor'}
			]
		*/	
		parametrosDaurll.push({
			chave: parametroSeparadoDoValor[0],
			valor: parametroSeparadoDoValor[1]
		});
	}
	
	return parametrosDaurll;
}

function chave(chave) {
	var parametrosDaurll = obtenhaParametosDaurll();
	
	return parametrosDaurll.find(function(parametro) {
		return parametro.chave == chave;
	});
}