const propiedadesJSON = [
        {
            name: "Casa de campo",
            description: "Un lugar ideal para descansar de la ciudad",
            src:
                "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
            rooms: 2,
            m: 170
        },
        {
            name: "Casa de playa",
            description: "Despierta tus días oyendo el oceano",
            src:
                "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
            rooms: 2,
            m: 130
        },
        {
            name: "Casa en el centro",
            description: "Ten cerca de ti todo lo que necesitas",
            src:
                "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
            rooms: 1,
            m: 80
        },
        {
            name: "Casa rodante",
            description: "Conviertete en un nómada del mundo sin salir de tu casa",
            src:
                "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
            rooms: 1,
            m:  6
        },
        {
            name: "Departamento",
            description: "Desde las alturas todo se ve mejor",
            src:
                "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
            rooms: 3,
            m: 200
        },
        {
            name: "Mansión",
            description: "Vive una vida lujosa en la mansión de tus sueños",
            src:
                "assets/img/mansion.jpg",
            rooms: 5,
            m: 500
        }
];



/*Seleccionar el contenedor de las propiedades*/
const divPropiedades = document.querySelector(".propiedades");
/* Seleccionar el contador */
const counter = document.getElementById("count");
/*Agregar el addEventListener al botón de búsqueda */
document.getElementById("buscar").addEventListener("click", () => actualizarPropiedad()) 


/* Función que retorna el template base según un parámetro */

function template(propiedad){
    return `<div class="propiedad h-100">
                <div class="img" style="background-image: url(${propiedad.src})">
                </div>
                <section>
                    <h5 class="title">${propiedad.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos : ${propiedad.rooms}</p>
                        <p>Metros : ${propiedad.m}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn">Ver más</button>
                </section>
            </div>`;
}

/* Función de búsqueda que renderiza el template según los datos de la búsqueda */

function actualizarPropiedad(){
    let numeroCuartos = Number(document.getElementById("cuartos").value);
    let minMeters = Number(document.getElementById("metrosDesde").value);
    let maxMeters = Number(document.getElementById("metrosHasta").value);
    /* Condicionar que estén todos los inputs con info */
    if (numeroCuartos && minMeters && maxMeters){
        let filteredTemplate = "";
        /* Iteramos por cada propiedad para generar un template según la búsqueda */
        for (let prop of propiedadesJSON) {
        if(prop.rooms === numeroCuartos && (prop.m >= minMeters && prop.m <= maxMeters)) {
            filteredTemplate += template(prop);
        }
        divPropiedades.innerHTML = filteredTemplate;
        counter.innerHTML = divPropiedades.childElementCount;
        }  
    } else {
        showModal();
    }
}

var modalWrap = null;
const showModal = () => {
    modalWrap = document.createElement("div");
    modalWrap.innerHTML = `
        <div class="modal" tabindex="-1">
        <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title">Aviso</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <p>Debe ingresar todos los datos solicitados</p>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>     
        </div>
        </div>
    </div>
        `;

    document.body.append(modalWrap);
    var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
    modal.show();
}; 

 /* Cargar las propiedades base al inicio */
function cargaInicial() {
    let html = "";
    for (let prop of propiedadesJSON){
        html += template(prop);
    }
    divPropiedades.innerHTML = html;
    counter.innerHTML = divPropiedades.childElementCount;
}
cargaInicial();








