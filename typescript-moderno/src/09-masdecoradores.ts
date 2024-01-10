// decoradores de metodos
function modmen(mostrar:boolean){
   return function info(target:Object, propertyKey:string, descriptor:any){
        if(mostrar){
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }else{
            descriptor.value = function(){
                console.log("metodo bloqueado!!!!");
            }
        }
    }
}

function mi_propiedad(target:Object, propertyKey:string,parameteIndex:number){
    console.log("Esta propiedad esta en la clase: "+target.constructor.name+" y la posicion es : "+parameteIndex);
}

class Ordenador{

     marca:string = "Asus";

    @modmen(true)
    encender(@mi_propiedad mensaje:string){
        console.log("Encendiendo....");
        console.log(mensaje);
    }
}


let pc = new Ordenador();

pc.encender("Iniciando sesion en el PC de Rogelio");