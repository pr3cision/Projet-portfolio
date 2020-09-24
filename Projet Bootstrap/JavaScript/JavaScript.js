// @ts-nocheck

var i = 0;


function htmlMove() {
  if (i == 0) {
    i = 1;
    var elemHtml = document.getElementById("htmlBar");
    var elemCss = document.getElementById("cssBar");
    
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elemHtml.style.width = width + "%";
        elemHtml.innerHTML = "HTML " + width  + "%";

        elemCss.style.width = width + "%";
        elemCss.innerHTML = "HTML " + width  + "%";
      }
    }
  }
}

function cssMove() {

    if (i == 0) {
      i = 1;
      var elemCss = document.getElementById("cssBar");
        console.log(elemCss)
      var width = 0;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 80) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elemCss.style.width = width + "%";
          elemCss.innerHTML = "Css " + width  + "%";
        }
      }
    }
  }

$(function(){
    $(".navbar a, footer a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({scrollTop: $(hash).offset().top}, 900, function(){window.location.hash = hash;})
    });

    htmlMove();
    cssMove();
    

})