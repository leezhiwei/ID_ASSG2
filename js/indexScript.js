let x = document.body;
let color = ["fuchsia", "aqua", "limegreen", "chartreuse","silver","cornsilk"];
setInterval(function() {
   for(let y = 0; y < 4; y++){
    x.style.backgroundColor = color[Math.floor(Math.random() * 3)];  
  }
}, 1111);