searchTrackcode = function(){
    let trackcode = document.getElementById('search-input').value;
    if (trackcode.length > 0) {
      trackcode = encodeURIComponent(trackcode)
      const urlRedirec = "https://atari.chazki.com/#/public/seguimiento/1/"+trackcode;
      console.log(urlRedirec)
      window.open(urlRedirec, "_blank");
    }
  };




function toggleDarkMode() {
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    
    darkModeBtn.classList.toggle('active');
    
    if (darkModeBtn.classList.contains('active')) {
      darkModeIcon.src = './dark-light/icono_light.png';
      document.body.classList.add('dark-mode');
    } else {
      darkModeIcon.src = './dark-light/icono_dark.png';
      document.body.classList.remove('dark-mode');
    }
  }