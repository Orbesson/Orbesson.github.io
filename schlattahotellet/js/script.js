if(screen.width < 720) { 
  var adfly_id = null; 
  var popunder_frequency_delay = null;
} else {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-5rem";
    }
    prevScrollpos = currentScrollPos;
  }    
  var adfly_id = ID; 
  var popunder_frequency_delay = 0;
}