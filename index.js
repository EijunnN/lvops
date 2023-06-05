
function toggleDarkMode() {
  const darkModeBtn = document.getElementById('dark-mode-btn');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const isDarkMode = document.body.classList.contains('dark-mode');
  const searchForm = document.getElementsByClassName('search-form')[0];
  darkModeBtn.classList.toggle('active');
  
  if (!isDarkMode) {
    darkModeIcon.src = './dark-light/icono_light.png';
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
    searchForm.style.boxShadow = '0 1px 8px rgba(57, 213, 45, 0.5)';
  } else {
    darkModeIcon.src = './dark-light/icono_dark.png';
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
    searchForm.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.3)';
  }

  // Agregar fondo blanco al icono de modo oscuro
  darkModeIcon.style.backgroundColor = !isDarkMode ? '#fff' : 'transparent';
}

window.addEventListener('DOMContentLoaded', function() {
  const darkMode = localStorage.getItem('darkMode');
  const darkModeBtn = document.getElementById('dark-mode-btn');
  const darkModeIcon = document.getElementById('dark-mode-icon');
  const searchForm = document.getElementsByClassName('search-form')[0];
  
  
  if (darkMode === 'true') {
    darkModeBtn.classList.add('active');
    darkModeIcon.src = './dark-light/icono_light.png';
    document.body.classList.add('dark-mode');
    darkModeIcon.style.backgroundColor = '#fff'; // Aplicar fondo blanco
    searchForm.style.boxShadow = '0 1px 8px rgba(57, 213, 45, 0.5)';
  } else {
    darkModeBtn.classList.remove('active');
    darkModeIcon.src = './dark-light/icono_dark.png';
    document.body.classList.remove('dark-mode');
    darkModeIcon.style.backgroundColor = 'transparent'; // Aplicar fondo transparente
    searchForm.style.boxShadow = '0 1px 8px rgba(0, 0, 0, 0.3)';
  }
});

searchTrackcode = function(){
    let trackcode = document.getElementById('search-input').value;
    if (trackcode.length > 0) {
      trackcode = encodeURIComponent(trackcode)
      const urlRedirec = "https://atari.chazki.com/#/public/seguimiento/1/"+trackcode;
      console.log(urlRedirec)
      window.open(urlRedirec, "_blank");
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
