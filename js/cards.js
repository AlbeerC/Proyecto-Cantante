// Generar cards con info desde JSON

const padre = document.getElementById("json");

fetch("../data/shows.json")
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((prod) => {
            const item = document.createElement("div")
            item.className = "fecha"
            item.innerHTML = `
                <img src="../img/fechas.jpg" />
                <h3> Portales tour ${prod.pais} </h3>

                <div class="fecha__info">

                    <div class="fecha__info-item">
                        <i class="fa-solid fa-calendar-days fechas-icono"></i>
                        <p>${prod.fecha}</p>
                    </div>
    
                    <div class="fecha__info-item">
                        <i class="fa-solid fa-stopwatch fechas-icono"></i>
                        <p>${prod.hora}</p>
                    </div>
    
                    <div class="fecha__info-item">
                        <i class="fa-solid fa-location-dot fechas-icono"></i>
                        <p>${prod.lugar}</p>
                    </div>
                    <p class="direccion">${prod.direccion}</p>

                </div>
            `
            padre.appendChild(item);
        })
    })