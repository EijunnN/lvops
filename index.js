
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


searchTrackcode = function(event){
  
    event.preventDefault();
    
    let trackcode = document.getElementById('search-input').value;
    if (trackcode.length > 0) {
      trackcode = encodeURIComponent(trackcode)
      const urlRedirec = "https://atari.chazki.com/#/public/seguimiento/1/"+trackcode;
      console.log(urlRedirec)


      const existingFrames = document.querySelectorAll('iframe');
    existingFrames.forEach(frame => {
      frame.parentNode.removeChild(frame);
    });
      // window.open(urlRedirec,"_blank");
      const iframeContainer = document.createElement('div');
      iframeContainer.style.display = 'flex';
      iframeContainer.style.justifyContent = 'center';
      
      const iframe = document.createElement('iframe');
      iframe.src = urlRedirec;
      iframe.style.width = '70%';
      iframe.style.height = '800px';
      iframe.style.border = 'none';
      // iframe.style.margin = ' 0 auto';

      iframe.style.transform = 'scale(0.85)';
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
