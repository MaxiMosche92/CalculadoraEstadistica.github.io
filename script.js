var ObjetComplet = []
var Objeto= []
var Poblacion=[]
const Muestra = 1
var Contando = []

function Redondeo(x) {
  return Number.parseFloat(x).toFixed(2);
}

function resultado (){ 
   let objet
   let array = []
   let PoblacionTotal = 0
   for (let i = 0 ; i < ObjetComplet.length ; i++){
    PoblacionTotal += ObjetComplet[i].Poblacion
   }
    let ET 
	let ni = 0
	let NI = 0
	let fi = 0
	let FI = 0
	let pi = 0
	let Pi = 0
	for (let i = 0 ; i < ObjetComplet.length ; i++){
     objet = new Object()
     objet.ET = ObjetComplet[i].Nombre
     objet.ni = ObjetComplet[i].Poblacion
     ni = ObjetComplet[i].Poblacion
     objet.NI = ni + NI
     NI += ni
     objet.fi = (Muestra*ObjetComplet[i].Poblacion)/PoblacionTotal
     fi = (Muestra*ObjetComplet[i].Poblacion)/PoblacionTotal
     objet.FI = fi + FI
     FI += fi 
     objet.pi = fi*100
     pi =  fi*100
     objet.Pi = pi + Pi
     Pi += pi
     array.push(objet)
	}
    ObjetComplet = array
}

function fun1 (){
	Poblacion.push(Number(document.getElementById('Poblacion').value))
	document.getElementById('SalidaPoblacion').innerText = Poblacion
	document.getElementById('Poblacion').value = ""
}

function fun3(){
  Objeto.push(document.getElementById('Nombre').value)
  document.getElementById('SalidaObjetos').innerText = Objeto
  document.getElementById('Nombre').value = ""
}

function calculo(){
	let objet
	  for(let i = 0 ; i < Objeto.length ; i++ ){
		objet = new Object()
		objet.Nombre = Objeto[i] ;
		objet.Poblacion= Poblacion[i] ;	
		ObjetComplet.push(objet)	
	}
 resultado()
 var elementoVariasLineas = ""
 for (let i = 0 ; i < ObjetComplet.length ; i++){
 	var lineaActual = '<tr><th scope="row">'+ObjetComplet[i].ET+'</th><td>'+ObjetComplet[i].ni.toFixed()+'</td><td>'+ObjetComplet[i].NI.toFixed()+'</td><td>'+Redondeo(ObjetComplet[i].fi)+'</td><td>'+Redondeo(ObjetComplet[i].FI)+'</td><td>'+ObjetComplet[i].pi.toFixed()+'</td><td>'+ObjetComplet[i].Pi.toFixed()+'</td></tr>'
    elementoVariasLineas += lineaActual
   }
  document.getElementById('ParaelHTML').innerHTML = elementoVariasLineas

document.getElementById ('inv').style.display = "none"
document.getElementById ('contJson').style.display = "contents"
}

function atras(){
document.getElementById ('inv').style.display = "contents"
document.getElementById ('contJson').style.display = "none"
document.getElementById('Muestra').value = ""
document.getElementById('SalidaObjetos').innerText = ""
document.getElementById('SalidaPoblacion').innerText = ""
ObjetComplet = []
Objeto= []
Poblacion=[]
}

function comparar(){
  let objet
  let array=[]
  for(let i = 0 ; i < Contando.length ; i++ ){

    objet = new Object()
    objet.Nombre = Contando[i]
    objet.numero = 0
    array.push (objet)
  }
  contando = []
  for(let i = 0 ; i < array.length ; i++ ){
    var bool = true
     for(let x = 0 ; x < array.length ; x++ ){
         if(array[i].Nombre == array[x].Nombre && bool == true){
            array[x].numero ++
            bool=false
         } 
        }
     }
    var elementoVariasLineas = ""
    for(let i = 0 ; i < array.length ; i++ ){
      if(array[i].numero > 0){
        var lineaActual ="Objeto = " + array[i].Nombre +", N = "+ array[i].numero +"<br>"
        elementoVariasLineas += lineaActual
      }
    }
    document.getElementById('label').innerHTML = elementoVariasLineas
}

function fun2(){
 if(document.getElementById('Muestra').value != ""){
 Contando.push(document.getElementById('Muestra').value.toLowerCase())
   comparar()
 }
 document.getElementById('Muestra').value = ""
}

function borrar(){
document.getElementById('Muestra').value = ""
document.getElementById('label').innerHTML = ""
document.getElementById('SalidaObjetos').innerText = ""
document.getElementById('SalidaPoblacion').innerText = ""
var ObjetComplet = []
var Objeto= []
var Poblacion= []
var Contando = []


}