gsap.set("#moon, .star", { opacity: 0 });
gsap.set("#sun, #cloud, #moon", { x: 15 });
gsap.set(".star", { x: 35, y: -5 });

$("#day").click(function () {
  gsap.to("#sun", 1, { x: -157, opacity: 0, ease: Power1.easeInOut });
  gsap.to("#cloud", 0.5, { opacity: 0, ease: Power1.easeInOut });
  gsap.to("#moon", 1, {
    x: -157,
    rotate: -360,
    transformOrigin: "center",
    opacity: 1,
    ease: Power1.easeInOut,
  });
  gsap.to(".star", 0.5, { opacity: 1, ease: Power1.easeInOut });
  gsap.to("#night", 1, {
    background: "#224f6d",
    borderColor: "#cad4d8",
    ease: Power1.easeInOut,
  });
  gsap.to("#background", 1, { background: "#0d1f2b", ease: Power1.easeInOut });
  $(this).css({ "pointer-events": "none" });

  setTimeout(function () {
    $("#night").css({ "pointer-events": "all" });
  }, 1000);
});

$("#night").click(function () {
  gsap.to("#sun", 1, { x: 15, opacity: 1, ease: Power1.easeInOut });
  gsap.to("#cloud", 1, { opacity: 1, ease: Power1.easeInOut });
  gsap.to("#moon", 1, {
    opacity: 0,
    x: 35,
    rotate: 360,
    transformOrigin: "center",
    ease: Power1.easeInOut,
  });
  gsap.to(".star", 1, { opacity: 0, ease: Power1.easeInOut });
  gsap.to("#night", 1, {
    background: "#9cd6ef",
    borderColor: "#65c0e7",
    ease: Power1.easeInOut,
  });
  gsap.to("#background", 1, { background: "#d3edf8", ease: Power1.easeInOut });
  $(this).css({ "pointer-events": "none" });

  setTimeout(function () {
    $("#day").css({ "pointer-events": "all" });
  }, 1000);
});

// function toggleDarkMode() {
//   const darkModeBtn = document.getElementById("dark-mode-btn");
//   const darkModeIcon = document.getElementById("dark-mode-icon");
//   const isDarkMode = document.body.classList.contains("dark-mode");
//   const searchForm = document.getElementsByClassName("search-form")[0];
//   darkModeBtn.classList.toggle("active");

//   if (!isDarkMode) {
//     darkModeIcon.src = "./dark-light/icono_light.png";
//     document.body.classList.add("dark-mode");
//     localStorage.setItem("darkMode", "true");
//     searchForm.style.boxShadow = "0 1px 8px rgba(57, 213, 45, 0.5)";
//   } else {
//     darkModeIcon.src = "./dark-light/icono_dark.png";
//     document.body.classList.remove("dark-mode");
//     localStorage.setItem("darkMode", "false");
//     searchForm.style.boxShadow = "0 1px 8px rgba(0, 0, 0, 0.3)";
//   }

//   // Agregar fondo blanco al icono de modo oscuro
//   darkModeIcon.style.backgroundColor = !isDarkMode ? "#fff" : "transparent";
// }

window.addEventListener("DOMContentLoaded", function () {
  const darkMode = localStorage.getItem("darkMode");
  const darkModeBtn = document.getElementById("dark-mode-btn");
  const darkModeIcon = document.getElementById("dark-mode-icon");
  const searchForm = document.getElementsByClassName("search-form")[0];

  if (darkMode === "true") {
    darkModeBtn.classList.add("active");
    darkModeIcon.src = "./dark-light/icono_light.png";
    document.body.classList.add("dark-mode");
    darkModeIcon.style.backgroundColor = "#fff"; // Aplicar fondo blanco
    searchForm.style.boxShadow = "0 1px 8px rgba(57, 213, 45, 0.5)";
  } else {
    darkModeBtn.classList.remove("active");
    darkModeIcon.src = "./dark-light/icono_dark.png";
    document.body.classList.remove("dark-mode");
    darkModeIcon.style.backgroundColor = "transparent"; // Aplicar fondo transparente
    searchForm.style.boxShadow = "0 1px 8px rgba(0, 0, 0, 0.3)";
  }
});

searchTrackcode = function (event) {
  event.preventDefault();

  let trackcode = document.getElementById("search-input").value;
  if (trackcode.length > 0) {
    trackcode = encodeURIComponent(trackcode);
    const urlRedirec =
      "https://atari.chazki.com/#/public/seguimiento/1/" + trackcode;
    console.log(urlRedirec);

    const existingFrames = document.querySelectorAll("iframe");
    existingFrames.forEach((frame) => {
      frame.parentNode.removeChild(frame);
    });

    // API de FEMS

    // const apiUrl = `https://commerce-logistics.falabella.services/express-service/v1/deliveries/lct/order/${trackcode}`;
    // API de Chazki
    const apiUrl = `https://atariboxcore.chazki.com:8443/ataribox-core/api/order/find/1/${trackcode}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        // DATOS DE CHAZKI - ATARI
        let lat = data.map.order.distanceDirect.latShip;
        let log = data.map.order.distanceDirect.lngShip;

        // DATOS DE FEMS
        // let lat = data.data.destination.latitude;
        // let log = data.data.destination.longitude;

        const urlWaze = `https://embed.waze.com/es/iframe?zoom=15&lat=${lat}&lon=${log}&pin=1`;
        const iframe = document.createElement("iframe");

        const iframeContainer = document.createElement("div");
        iframeContainer.style.display = "flex";
        iframeContainer.style.justifyContent = "center";
        iframe.style.transform = "scale(0.85)";
        iframe.src = urlWaze;
        iframe.style.width = "50%";
        iframe.style.height = "600px";
        iframe.style.border = "none";
        // iframe.style.margin = ' 0 auto';

        // iframe.style.transform = "scale(0.85)";
        // Añadir el <iframe> al documento
        // document.body.appendChild(iframe);
        iframeContainer.appendChild(iframe);
        document.body.appendChild(iframeContainer);
        // Aquí puedes trabajar con los datos obtenidos de la API
        console.log(data);
      })
      .catch((error) => {
        console.error("Ocurrió un error:", error.message);
      });
    // window.open(urlRedirec,"_blank");
    const iframeContainer = document.createElement("div");
    iframeContainer.style.display = "flex";
    iframeContainer.style.justifyContent = "center";

    const iframe = document.createElement("iframe");
    iframe.src = urlRedirec;
    iframe.style.width = "70%";
    iframe.style.height = "800px";
    iframe.style.border = "none";
    

    // iframe.style.margin = ' 0 auto';

    iframe.style.transform = "scale(0.85)";
    // Añadir el <iframe> al documento
    // document.body.appendChild(iframe);
    iframeContainer.appendChild(iframe);
    document.body.appendChild(iframeContainer);
  }
};

// function toggleDarkMode() {
//     const darkModeBtn = document.getElementById('dark-mode-btn');
//     const darkModeIcon = document.getElementById('dark-mode-icon');

//     darkModeBtn.classList.toggle('active');

//     if (darkModeBtn.classList.contains('active')) {
//       darkModeIcon.src = './dark-light/icono_light.png';
//       document.body.classList.add('dark-mode');
//     } else {
//       darkModeIcon.src = './dark-light/icono_dark.png';
//       document.body.classList.remove('dark-mode');
//     }
//   }

// Función para consumir una API y mostrar los resultados
// function searchTrackcode(event) {
//   event.preventDefault();

//   let trackcode = document.getElementById('search-input').value;
//   if (trackcode.length > 0) {
//     trackcode = encodeURIComponent(trackcode);

//     // URL de la API a consumir (reemplaza con la URL de la API real)
//     const apiUrl = `https://atariboxcore.chazki.com:8443/ataribox-core/api/order/find/1/${trackcode}`;

//     fetch(apiUrl)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Error en la solicitud: ' + response.status);
//         }
//         return response.json();
//       })
//       .then(data => {
//         // Aquí puedes trabajar con los datos obtenidos de la API
//         console.log(data);
//       })
//       .catch(error => {
//         console.error('Ocurrió un error:', error.message);
//       });
//   }
// }

// Función para mostrar los datos de la API en la página web
function displayData(data) {
  // Puedes modificar esta función para mostrar los datos en tu página web
  // Por ejemplo, actualiza elementos HTML con los datos recibidos
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = JSON.stringify(data, null, 2);
}
