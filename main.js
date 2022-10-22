// const mascota = "perro";

// if (mascota === "lagarto") {
//   console.log("Tengo un lagarto");
// } else if (mascota === "dog") { 
//   console.log("Tego un perro");
// } else if (mascota=== "gato") {
//   console.log("Tengo un gato");
// } else if (mascota === "serpiente") {
//   console.log("Tengo una serpiente");
// } else if (mascota === "Loro") {
//   console.log("Tengo un loro");
// } else {
//   console.log("No tengo mascota");
// }

// const mascota = "lagarto";
 
// switch (mascota) {
//   case "lagarto":
//     console.log("Tengo un lagarto");
//     break;
//   case "perro":
//     console.log("Tengo un perro");
//     break;
//   case "gato":
//     console.log("Tengo un gato");
//     break;
//   case "serpiente":
//     console.log("Tengo una serpiente");
//     break;
//   case "loro":
//     console.log("Tengo un loro");
//     break;
//   default:
//     console.log("No tengo mascota");
//     break;
// }


// let nombreHeroe="Batman";
// let vidasActuales=4;
// let totalVidasIniciales=5;
// console.log(`el personaje se llama ${vidasActuales}/${totalVidasIniciales}`);


// sumaEdades=0
// for(let i=1;i<=5;i++){  
  
//     edad=prompt(`digite la edad de la persona:${i}`)
//     sumaEdades=sumaEdades+parseInt(edad)
    
// }  
// promedio=sumaEdades/5
// console.log(promedio)


// for(let i=1;i<=100;i++){ 

//     if(i%2==0){
//         console.log("el numero es par:",i)
//     }
//     else{
//         console.log("el numero es impar:",i)
//     }
// }



// sumaEdades=0
// for(let i=1;i<=5;i++){  
  
//     edad=prompt(`digite la edad de la persona:${i}`)
//     sumaEdades=sumaEdades+parseInt(edad)
    
// }  
// promedio=sumaEdades/5
// console.log(promedio)

// let i=true
// let p=1
// sumaEdades=0
// while(i==true){

//     if (i==true){
//         edad=prompt(`digite la edad de la persona:${p}`)
//         sumaEdades=sumaEdades+parseInt(edad)
//         p++;
//     }
//     if(p>5){
//         i=false
//     }


// }

// let i=0
// sumaEdades=0
// do{
//     edad=prompt(`digite la edad de la persona:${i+1}`)
//     sumaEdades=sumaEdades+parseInt(edad)
//     i++
// }while(i<=4)

// promedio=sumaEdades/5
// console.log(promedio)


// let nombresPersonas=["oscar","maria","jose"]
// nombresPersonas.push("javier")
// console.log(nombresPersonas[0])


// let anonima=function () {
//    console.log("hola mundo")
    
// }


// console.log(anonima())


// let iniciar= (num1,num2) => {
//     resultado=num1+num2
//     console.log(resultado)
// }

// console.log(iniciar(20,50))

// let saludar= () => console.log("hola mundo")


// saludar()






//definiendo objetos en JS
// let player={
//     name:"Oscar",
//     life:99,
//     power:10
// };

// console.log(player.name);
// console.log(player["name"]);

// const user={

//   name:"Oscar",
//   task:function  (){ return "hola"}
// }


// alert(user.task());

// const player={
//         name:"Oscar",
//         life:4,
//         totalLife:8,
//         power:10,
//         toString:function (){
//           return `${this.name} (${this.life}/${this.totalLife})`; 
//           return  
//         }
//     };
    
   
    
//     alert(player.toString ());
//     alert(player)
//     console.log("el jugador es:" + player)


    // las funciones pueden retornar un objeto (ES5)
    // let agregarIdNombre=function  (id,nombre){
    //     return{
    //       id:id,
    //       nombre:nombre
    //     }
    // }

    // console.log(agregarIdNombre(1,"oscar"))


    // ES6
    // Las funciones flecha tambien pueden retornar un objeto en su forma de expresion literal
  
    
//     let agregarIdNombre= (id,nombre) =>({id:id,nombre:nombre})

//   console.log(agregarIdNombre(1,"oscar"))






//callback
// setTimeout(() => console.log("pasaron 10 segundos"),10000);

// El ejemplo asiguiente tenemos una callback sincrónica, ya que se ejecuta inmediatamente.

// function saludar(nombre) {
//     alert('Hola ' + nombre);
//   }
  
//   function procesarEntradaUsuario(callback) {
//     var nombre = prompt('Por favor ingresa tu nombre.');
//     callback(nombre);
//   }
  
//   procesarEntradaUsuario(saludar);
  




// ahora con asincronismo

// function solicitudServidor(consulta, callback){
//     setTimeout(function(){
//       var respuesta = consulta + "lleno!";
//       callback(respuesta); 
//     },5000);
//   }
  
//   function callback(resultados){
//     console.log("Respuesta del servidor: " + resultados);
//   }
  
//   solicitudServidor("El vaso está medio  ", callback);


// esto mismo seria asi:


// function solicitudServidor(consulta, callback){
//     setTimeout(function(){
//       var respuesta = consulta + "lleno!";
//       callback(respuesta);
//     },5000);
//   }
  
//   function obtenerResultados(resultados){
//     console.log("Respuesta del servidor: " + resultados);
//   }
  
//   solicitudServidor("El vaso está medio  ", obtenerResultados);



// o incluso asi seria lo mismo por concepto de lo que es callback:


// function solicitudServidor(consulta, obtenerResultados){
//     setTimeout(function(){
//       var respuesta = consulta + "lleno!";
//       obtenerResultados(respuesta);
//     },5000);
//   }
  
//   function obtenerResultados(resultados){
//     console.log("Respuesta del servidor: " + resultados);
//   }
  
//   solicitudServidor("El vaso está medio  ", obtenerResultados);



//otro ejemplo sencillo:

// function primera(){

//     setTimeout(function (){
//      console.log("soy la primera funcion");

//     },3000);

// }


// function segunda(){

//      console.log("soy la segunda funcion");

// }

// primera(segunda());




//promesas

// Las promesas en JavaScript son una manera más elegante de trabajar con código asíncrono que los callbacks,
//  pues evitan el famoso callback hell. Aunque actualmente las promesas o promises de
//  JavaScript están siendo remplazadas por async y await es bueno saber cómo funcionan las mismas.













// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 12);//aleatorio entre 0 incluido y 11
//   console.log(number);
//   setTimeout(
//                  () => number > 4? resolve(number):reject(new Error('Menor a 4')),
//                  4000
//   );
// });

// promise
//   .then(number => console.log(number))
//   .catch(error => console.error(error));



// funcion sincrona

// let compras = 10000;
// function hacerLaCompra(){
//     compras += 5000;
// }  
// hacerLaCompra();
// console.log(compras); // 



//volvamosla asincrona:

// let compras = 10000; 
// function hacerLaCompra(){
//     setTimeout(function(){ 
//     compras += 5000; 
//     console.log(compras)
//     }, 2000); 
// } 
// hacerLaCompra();
// console.log(compras); 






// utilicemos una funcion callback

// let compras = 10000;
// function hacerLaCompra(proximaFuncion){ 
//     setTimeout(function (){ 
//     compras += 5000;
//     console.log("estoy trabajando")
//     proximaFuncion(); 
//     }, 2000);
// } 
// hacerLaCompra(function (){ 
//     console.log(compras); // 
// }) 


//CALLBACK HELL

// hacerLaCompra(function(){ 
//   console.log(compras); // 
//   hacerLaCompra(function(){ 
//       console.log(compras); //  
//       hacerLaCompra(function(){ 
//           console.log(compras); //
//           hacerLaCompra(function(){ 
//               console.log(compras); //  
//               hacerLaCompra(function(){ 
//                   console.log(compras); // 
//               }) 
//           })
//       })
//   })
// }) 



//PROMESAS

// Cuando creamos una promesa esta recibe como parámetro una función y esta función recibe dos parámetros que
//  generalmente son definidos como  resolve y reject los cuales son ejecutados si se cumple o no la promesa. 
//  Dentro de
//  función definiremos la condición para que se complete la promesa por alguno de los dos caminos: 

// ****************************************************************
// let promesa = new Promise((resolve, reject) => {
//     let aleatorio = Math.random(); 
//     console.log(aleatorio)
//     setTimeout( () => { 
//         if (aleatorio < 0.5) { 
//             resolve("Promesa resuelta"); 
//         } else {  
//             reject("Promesa no cumplida"); 
//         }  
//     }, 4000); 
// });

// Una vez que la promesa llega a un resolve o reject esta retorna su contenido y termina la ejecución 
// de la promesa, por lo que bajo ninguna circunstancia 
// puede retornar más de un estado. 

// Una vez creada la promesa debemos ejecutarla haciendo uso del método .then() que recibe lo que es enviado 
// por el  resolve, y el método .catch() que recibe lo que sea enviado por el reject.
// promesa
// .then((resultado) => console.log(resultado)) 
// .catch((error) => console.log(error))  
// .finally(() => console.log("Promesa finalizada")) 
























































