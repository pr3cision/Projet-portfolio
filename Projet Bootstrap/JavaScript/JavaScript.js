// @ts-nocheck

function fillTheBar(finalPxValue, htmlElementId, incrementStep,progressDelay) {

  const progressBar = document.getElementById(htmlElementId);

  let currentWidth = 0;

  const fillTimer = setInterval(() => {

      if (currentWidth < finalPxValue) {
          currentWidth += incrementStep;
          progressBar.style.width = currentWidth + "%";
          
      } else {
          clearInterval(fillTimer);
      }

  }, progressDelay)

}

function main() {

  fillTheBar(80, "htmlBar", 1 , 15) //animation de la progress-bar html

  fillTheBar(80, "cssBar", 1, 15) //animation de la progress-bar css

  fillTheBar(45, "javascriptBar", 1 , 15) //animation de la progress-bar javascript

  fillTheBar(60, "jqueryBar", 1, 15) //animation de la progress-bar jquery

  fillTheBar(80, "bootstrapBar", 1, 15) //animation de la progress-bar bootstrap

  fillTheBar(40, "phpBar", 1 , 15) //animation de la progress-bar php
}

$(function(){
    $(".navbar a, footer a").on("click", function(event){
        event.preventDefault();
        var hash = this.hash;
        
        $('body,html').animate(
          {scrollTop: $(hash).offset().top}, 
          900, 
          function(){
            window.location.hash = hash;
          })
    });

    main()

})