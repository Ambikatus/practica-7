//objetos en javascript
//const = declaracion tipo variable para objetos o variables constantes
const persona = {
    nombre: 'tilin', apellidos: 'cadena', edad: 18,
    saludar: function(){
        return 'Hola soy ' + this.nombre +' '+ this.apellidos
    }
}

const persona2 = {
    nombre: 'michin', apellidos: 'gonzalez', edad: 18,
    saludar: function(){
        return 'Hola soy ' + this.nombre +' '+ this.apellidos
    }
}
let personas = [persona,persona2];
console.log(personas[0].saludar())

let tabla = '';
persona.nombre = 'Pablo';
for (let i=0;i<personas.length;i++){
    tabla += '<tr><td>'+(i+1)+'</td><td>'+personas[i].nombre+'</td><td>'+personas[i].apellidos+'</td><td>'+personas[i].edad+'</td></tr>'
}
document.getElementById('tabla').innerHTML = tabla;