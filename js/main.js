// Menu
((d) => {
  d.addEventListener('click', (e) => {
    if (e.target.matches("#btn-open")) {
      document.querySelector(".main-nav").classList.add("main-nav__active");
    }

    if (e.target.matches("#menu-close")) {
      document.querySelector(".main-nav").classList.remove("main-nav__active");
    }

    const resourceBtn = d.getElementById("main-nav__link--btn");
    resourceBtn.addEventListener("click", function (e) {
      let height = 0;
      let items = resourceBtn.nextElementSibling;
      if (items.clientHeight === 0) {
        height = items.scrollHeight;
      }

      items.style.height = `${height}px`;
    });
  })
})(document);

// TOKENOMICS
((d) => {
  const CHART = d.getElementById('chart')

  let lineChart = new Chart(CHART, {
    type: "doughnut",
    data: {
      labels: ["75%: Fair Launch", "2%: Development", "23%:Burn"],
      datasets: [
        {
          data: [75, 2, 23],
          backgroundColor: ["#977c44", "#0d579c", "#e63746"],
        },
      ],
    },
    options: {
      responsive: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "rgb(0, 0, 0)",
            font: {
              size: 14,
              weight: 700
            },
            position: "bottom",
          },
          lineWidth: 10,
        },
      },
      layout: {
        padding: 5,
      },
    },
  });
})(document);

// ROADMAP DINAMICS TABS
((d) => {
  // Obtener todos los botones
  const buttons = document.querySelectorAll(".controls button");

  // Recorrer todos los botones
  buttons.forEach((button) => {
    // Escuchar el evento click de cada boton existente
    button.addEventListener("click", (e) => {
      // Obtener el contenedor(controls) de los botones
      const parent = button.parentNode;
      // Obtener el contenedor tabs
      const grantParent = parent.parentNode;
      // Obtener el tab container clicado
      const container = grantParent.querySelector(".tabs-container");
      // obtener los botones que estan dentro de controls y luego convertir el HTMLColection a Array
      const childrenList = Array.from(parent.children);
      // Obtener el index del botom clicado
      const index = childrenList.indexOf(button);
      // Modificar el transform para ir a la tab deseada
      container.style.transform = `translatex(-${index * 100}%)`;

      //quitarle la clase active al elemento anterior para luego Colocarle la clase active al boton actual
      parent
        .querySelectorAll("button.active")
        .forEach((activeBtn) => activeBtn.classList.remove("active"));
      button.classList.add("active");
    });
  });
})(document)
