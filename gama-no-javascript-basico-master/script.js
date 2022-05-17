function repeticao (cpf){
	if (cpf == '11111111111'){
	return !true;
	} else if (cpf == '22222222222'){
		return !true;
	}	else if (cpf == '33333333333'){
			return !true;
			}else if (cpf == '44444444444'){
				return !true;
				}else if (cpf == '55555555555'){
					return !true;
					}else if (cpf == '66666666666'){
						return !true;
						}else if (cpf == '77777777777'){
							return !true;
							}else if (cpf == '88888888888'){
								return !true;
								}else if (cpf == '99999999999'){
									return !true;
									}else if (cpf == '00000000000'){
										return !true;
	}return true;
} 
function validaCPF(cpf){
	if(cpf.length != 11){
		return false;
	} 	else {
			var numeros = cpf.substring(0, 9);
			var digitos = cpf.substring(9, 11);
			var soma = 0;
			//i-- vai diminuindo de 10
				for(var i = 10; i > 1; i--){
				soma += numeros.charAt(10-i)*i;
				//A função charAt() retorna a posição da string na lista
				}
				var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
				//Validação do primeiro dígito
				if (resultado != digitos.charAt(0))	{
					return false;
				}else{
					soma = 0; 
					numeros = cpf.substring(0, 10);
					for (var k = 11; k > 1; k--) {
						soma += numeros.charAt(11 - k) * k; 
					}
					resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
					//validação do segundo digito
					if (resultado != digitos.charAt(1)){
						return false;
					} 
					return true;
				}
		}
}
function onlynumber(evt) {
	var theEvent = evt || window.event;
	var key = theEvent.keyCode || theEvent.which;
	key = String.fromCharCode( key );
	//var regex = /^[0-9.,]+$/;
	var regex = /^[0-9]+$/;
	if( !regex.test(key) ) {
	   theEvent.returnValue = false;
	   if(theEvent.preventDefault) theEvent.preventDefault();
	}
 }
function retornoCpf(cpf){
		return cpf;
}
function validacao(){
	document.getElementById('success').style.display = 'none';
	document.getElementById('error').style.display = 'none';
	var cpf = document.getElementById('cpf_digitado').value;
	var resultadoValidacao = validaCPF(cpf);
	var resultadoRepeticao = repeticao(cpf);
		if (resultadoValidacao == true && resultadoRepeticao == true){
		document.getElementById('success').style.display = 'block';
		} else {
	    	document.getElementById('error').style.display = 'block';

			


		}
}