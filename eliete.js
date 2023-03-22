programa
{
	
	funcao inicio()
	{
		inteiro num1,num2,num3,num4,quant_impares=0,soma=0
		real media
		escreva("Informe o primeiro número")
		leia(num1)
		escreva("Informe o segundo número")
		leia(num2)
		escreva("Informe o terceiro número")
		leia(num3)
		escreva("Informe o quarto número")
		leia(num4)
		se(num1%2==1){
			quant_impares=quant_impares+1
               soma=soma+num1
		}
		se(num2%2==1){
			quant_impares=quant_impares+1
               soma=soma+num1
		}
		se(num3%2==1){
			quant_impares=quant_impares+1
               soma=soma+num1
		}
		se(num1%4==1){
			quant_impares=quant_impares+1
               soma=soma+num1
		}
		media=soma/quant_impares
		escreva(media)
	