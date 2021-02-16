//Variable
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo= document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();

const min = max - 10;

// console.log(max);
// console.log(min);

//Generar un objecto con la busqueda
const datosBuqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''

}



//Envent

document.addEventListener('DOMContentLoaded', () => {
    mostarAutos(autos); //muestra los autos al cargar

    //llenar las opciones de anos
    llenarSelect();

})

//Envent listener para los select de busqueda

marca.addEventListener('change', e => {
    datosBuqueda.marca = e.target.value;

    filtraAutos();
});
year.addEventListener('change', e => {
    datosBuqueda.year = parseInt(e.target.value);

    filtraAutos();
});
minimo.addEventListener('change', e => {
    datosBuqueda.minimo = e.target.value;

    filtraAutos();
});
maximo.addEventListener('change', e => {
    datosBuqueda.maximo = e.target.value;

    filtraAutos();
});
puertas.addEventListener('change', e => {
    datosBuqueda.puertas = parseInt(e.target.value);

    filtraAutos();
});
transmision.addEventListener('change', e => {
    datosBuqueda.transmision = e.target.value;
    filtraAutos();
    
});
color.addEventListener('change', e => {
    datosBuqueda.color = e.target.value;
    console.log(datosBuqueda);

    filtraAutos();
})


//Function

function mostarAutos(autos) {
    limpiarHTML()
    autos.forEach(auto => {

        const {marca,modelo,year,precio,color,puertas,transmision} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `

        ${marca} - ${modelo} - ${year} - ${precio} - ${color} - ${transmision} - ${puertas}


        `;

        //Insertar en el html
        resultado.appendChild(autoHTML)
        
    });
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

}

function llenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); //Agrega las opciones de anos al select
    }
}

function filtraAutos() {
    const resultado = autos.filter( filtraMarca ).filter(filtrarYear).filter( filtrarMinimo ).filter( filtrarMaximo ).filter( filtrarPuertas ).filter( filtrarTransmision ).filter( filtrarColor )

    mostarAutos(resultado);
    
}

function filtraMarca(auto) {
    const {marca} = datosBuqueda;

    if(marca) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear(auto){
    const {year} = datosBuqueda;
    if(year) {
        return auto.year === year;
    }

    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBuqueda;

    if(minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBuqueda;

    if (maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto) {
    const {puertas} = datosBuqueda;
    // console.log(typeof(puertas));
    if(puertas) {
        return auto.puertas === puertas;
    }

    return auto;
}

function filtrarTransmision(auto){
    const {transmision} = datosBuqueda;

    if(transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    const {color} = datosBuqueda;

    if(color) {
        return auto.color === color;
    }

    return auto;
}
