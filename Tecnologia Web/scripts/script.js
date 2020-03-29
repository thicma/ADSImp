var nome = "Thiago Carlos";
var idade = 34;
var cursos = ["ADS","SI","BD"]
var notas= [
	[7,6,5],
	[3.5,4,6],
	[8,9,10]
];

console.log("Olá "+ nome + " bonitão");
console.log("Idade "+ idade+ " anos");

for (var i = 0; i <cursos.length; i++){
	console.log("Cursos: "+ cursos[i]);
	var media=0;
	for (var j=0; j< notas[i].length; j++){
		media = media+ notas[i][j]
	}
	media = media/3;
	if(media >=6){
		console.log("Aprovado média: "+ media);
	}else{
		console.log("Reprovado média: "+ media);
	}
}